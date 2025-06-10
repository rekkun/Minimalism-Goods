import { Badge } from "@medusajs/ui"

const PaymentTest = ({ className }: { className?: string }) => {
  return (
    <Badge color="orange" className={className}>
      <span className="font-semibold">Cảnh báo:</span> Chỉ dành cho mục đích thử nghiệm.
    </Badge>
  )
}

export default PaymentTest
