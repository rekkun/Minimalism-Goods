import { Heading, Text } from "@medusajs/ui"
import TransferActions from "@modules/order/components/transfer-actions"
import TransferImage from "@modules/order/components/transfer-image"

export default async function TransferPage({
  params,
}: {
  params: { id: string; token: string }
}) {
  const { id, token } = params

  return (
    <div className="flex flex-col gap-y-4 items-start w-2/5 mx-auto mt-10 mb-20">
      <TransferImage />
      <div className="flex flex-col gap-y-6">
        <Heading level="h1" className="text-xl text-zinc-900">
          Yêu cầu chuyển nhượng đơn hàng {id}
        </Heading>
        <Text className="text-zinc-600">
          Bạn đã nhận được yêu cầu chuyển nhượng đơn hàng ({id}).
          Nếu đồng ý, hãy ấn nút phía dưới
        </Text>
        <div className="w-full h-px bg-zinc-200" />
        <Text className="text-zinc-600">
          Nếu bạn đồng ý chuyển nhượng, chủ sở hữu mới sẽ chịu toàn bộ trách nhiệm cũng như quyền hạn liên quan đến sản phẩm.
        </Text>
        <Text className="text-zinc-600">
          Nếu bạn không đồng ý chuyển nhượng, chỉ đơn giản là bỏ qua thông báo này thôi.
        </Text>
        <div className="w-full h-px bg-zinc-200" />
        <TransferActions id={id} token={token} />
      </div>
    </div>
  )
}
