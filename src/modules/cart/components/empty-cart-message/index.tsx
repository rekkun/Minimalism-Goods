import { Heading, Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"

const EmptyCartMessage = () => {
  return (
    <div className="py-48 px-2 flex flex-col justify-center items-start" data-testid="empty-cart-message">
      <Heading
        level="h1"
        className="flex flex-row text-3xl-regular gap-x-2 items-baseline"
      >
        Giỏ hàng
      </Heading>
      <Text className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        Bạn chưa có sản phẩm nào trong giỏ hàng. Hãy thêm sản phẩm vào giỏ hàng để bắt đầu mua sắm.
      </Text>
      <div>
        <InteractiveLink href="/store">Khám phá sản phẩm</InteractiveLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
