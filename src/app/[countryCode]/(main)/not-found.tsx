import { Metadata } from "next"

import InteractiveLink from "@modules/common/components/interactive-link"

export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
}

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Trang không tìm thấy</h1>
      <p className="text-small-regular text-ui-fg-base">
        Chắc hẳn bạn bị lạc rồi... Để tôi đưa bạn trở về nhé.
      </p>
      <InteractiveLink href="/">Quay lại trang chính</InteractiveLink>
    </div>
  )
}
