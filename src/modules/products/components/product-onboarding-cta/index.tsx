import { Button, Container, Text } from "@medusajs/ui"
import { cookies as nextCookies } from "next/headers"

async function ProductOnboardingCta() {
  const cookies = await nextCookies()

  const isOnboarding = cookies.get("_medusa_onboarding")?.value === "true"

  if (!isOnboarding) {
    return null
  }

  return (
    <Container className="max-w-4xl h-full bg-ui-bg-subtle w-full p-8">
      <div className="flex flex-col gap-y-4 center">
        <Text className="text-ui-fg-base text-xl">
          Sản phẩm demo đã được tạo thành công! 🎉
        </Text>
        <Text className="text-ui-fg-subtle text-small-regular">
          Bạn có thể tiếp tục thiết đặt tại trang quản trị.
        </Text>
        <a href="http://localhost:7001/a/orders?onboarding_step=create_order_nextjs">
          <Button className="w-full">Tiếp tục thiết đặt</Button>
        </a>
      </div>
    </Container>
  )
}

export default ProductOnboardingCta
