import { Metadata } from "next"
import { notFound } from "next/navigation"

import AddressBook from "@modules/account/components/address-book"

import { getRegion } from "@lib/data/regions"
import { retrieveCustomer } from "@lib/data/customer"

export const metadata: Metadata = {
  title: "Địa chỉ",
  description: "Xem địa chỉ của bạn và cập nhật chúng.",
}

export default async function Addresses(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params
  const customer = await retrieveCustomer()
  const region = await getRegion(countryCode)

  if (!customer || !region) {
    notFound()
  }

  return (
    <div className="w-full" data-testid="addresses-page-wrapper">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Địa chỉ giao hàng</h1>
        <p className="text-base-regular">
          Xem và cập nhật địa chỉ giao hàng của bạn, bạn có thể thêm nhiều địa chỉ
          mà bạn muốn. Lưu địa chỉ của bạn để chọn nhanh khi thanh toán.
        </p>
      </div>
      <AddressBook customer={customer} region={region} />
    </div>
  )
}
