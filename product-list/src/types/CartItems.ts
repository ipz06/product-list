export interface CartItem {
  id: string
  quantity: number
  name: string
  price: number
  thumbnail?: string
  image?: {
    desktop?: string
    mobile?: string
    thumbnail?: string
  }
}

export interface Item {
  id: string
  name: string
  price: number
  thumbnail?: string
  image?: {
    desktop?: string
    mobile?: string
    thumbnail?: string
  }
}
