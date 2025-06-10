import { acceptTransferRequest } from "@lib/data/orders"
import { Heading, Text } from "@medusajs/ui"
import TransferImage from "@modules/order/components/transfer-image"

export default async function TransferPage({
  params,
}: {
  params: { id: string; token: string }
}) {
  const { id, token } = params

  const { success, error } = await acceptTransferRequest(id, token)

  return (
    <div className="flex flex-col gap-y-4 items-start w-2/5 mx-auto mt-10 mb-20">
      <TransferImage />
      <div className="flex flex-col gap-y-6">
        {success && (
          <>
            <Heading level="h1" className="text-xl text-zinc-900">
              Đơn hàng đã được chuyển nhượng tới bạn!
            </Heading>
            <Text className="text-zinc-600">
              Đơn hàng {id} đã được chuyển tới chủ sở hữu mới.
            </Text>
          </>
        )}
        {!success && (
          <>
            <Text className="text-zinc-600">
              Có lỗi xảy ra, hãy liên hệ bộ phận chăm sóc khách hàng nhé.
            </Text>
            {error && (
              <Text className="text-red-500">Lỗi: {error}</Text>
            )}
          </>
        )}
      </div>
    </div>
  )
}
