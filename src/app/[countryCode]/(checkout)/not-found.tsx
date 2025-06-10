import InteractiveLink from "@modules/common/components/interactive-link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "404",
  description: "Có gì đó sai sai...",
}

export default async function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Không tìm thấy trang</h1>
      <p className="text-small-regular text-ui-fg-base">
        Trang bạn đã cố gắng truy cập không tồn tại.
      </p>
      <InteractiveLink href="/">Quay lại trang chủ</InteractiveLink>
    </div>
  )
}
