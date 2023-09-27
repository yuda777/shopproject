"use client"

import * as React from "react"
import type { CartLineItem } from "@/types"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import { deleteCartItemAction, updateCartItemAction } from "@/app/_actions/cart"

interface UpdateCartProps {
  cartLineItem: CartLineItem
}

export function UpdateCart({ cartLineItem }: UpdateCartProps) {
  // export function UpdateCart({ }: UpdateCartProps) {
  const [isPending, startTransition] = React.useTransition()

  return (
    <div className="flex items-center space-x-1">
      <div className="flex items-center space-x-1">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => {
            startTransition(async () => {
              try {
                await updateCartItemAction({
                  productId: cartLineItem.id,
                  quantity: Number(cartLineItem.quantity) - 1,
                  // productId: 1,
                  // quantity: 1,
                })
              } catch (error) {
                error instanceof Error
                  ? toast.error(error.message)
                  : toast.error("Something went wrong, please try again.")
              }
            })
          }}
          disabled={isPending}
        >
          <Icons.remove className="h-3 w-3" aria-hidden="true" />
          <span className="sr-only">Remove one item</span>
        </Button>
        <Input
          type="number"
          min="0"
          className="h-8 w-14 [-moz-appearance:textfield]"
          value={cartLineItem.quantity}
          // value={0}
          // onChange={(e) => {
          onChange={(e) => {
            startTransition(async () => {
              try {
                await updateCartItemAction({
                  productId: cartLineItem.id,
                  // productId: 1,
                  quantity: Number(e.target.value),
                })
              } catch (error) {
                error instanceof Error
                  ? toast.error(error.message)
                  : toast.error("Something went wrong.")
              }
            })
          }}
          disabled={isPending}
        />
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => {
            startTransition(async () => {
              try {
                await updateCartItemAction({
                  productId: cartLineItem.id,
                  quantity: Number(cartLineItem.quantity) + 1,
                  // productId: 1,
                  // quantity: 1,
                })
              } catch (error) {
                error instanceof Error
                  ? toast.error(error.message)
                  : toast.error("Something went wrong.")
              }
            })
          }}
          disabled={isPending}
        >
          <Icons.add className="h-3 w-3" aria-hidden="true" />
          <span className="sr-only">Add one item</span>
        </Button>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={() => {
          startTransition(async () => {
            try {
              await deleteCartItemAction({
                productId: cartLineItem.id,
                // productId: 1,
              })
            } catch (error) {
              error instanceof Error
                ? toast.error(error.message)
                : toast.error("Something went wrong.")
            }
          })
        }}
        disabled={isPending}
      >
        <Icons.trash className="h-3 w-3" aria-hidden="true" />
        <span className="sr-only">Delete item</span>
      </Button>
    </div>
  )
}
