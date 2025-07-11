import { ArrowUpRightMini } from "@medusajs/icons"
import { Text } from "@medusajs/ui"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404",
  description: "Không tìm thấy trang này",
}

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Không tìm thấy trang</h1>
      <p className="text-small-regular text-ui-fg-base">
        Hình như bạn đang lạc... Bạn có muốn tôi dẫn đường quay về trang chủ không? 
      </p>
      <Link
        className="flex gap-x-1 items-center group"
        href="/vn"
      >
        <Text className="text-ui-fg-interactive">Quay lại trang chủ</Text>
        <ArrowUpRightMini
          className="group-hover:rotate-45 ease-in-out duration-150"
          color="var(--fg-interactive)"
        />
      </Link>
    </div>
  )
}
