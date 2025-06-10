"use client"

import { resetOnboardingState } from "@lib/data/onboarding"
import { Button, Container, Text } from "@medusajs/ui"

const OnboardingCta = ({ orderId }: { orderId: string }) => {
  return (
    <Container className="max-w-4xl h-full bg-ui-bg-subtle w-full">
      <div className="flex flex-col gap-y-4 center p-4 md:items-center">
        <Text className="text-ui-fg-base text-xl">
          Đơn đặt hàng thử nghiệm thành công rồi hehehe! 🎉
        </Text>
        <Text className="text-ui-fg-subtle text-small-regular">
          Giờ thì bạn có thể hoàn tất thiết đặt ở trang quản trị.
        </Text>
        <Button
          className="w-fit"
          size="xlarge"
          onClick={() => resetOnboardingState(orderId)}
        >
          Hoàn tất thiết đặt
        </Button>
      </div>
    </Container>
  )
}

export default OnboardingCta
