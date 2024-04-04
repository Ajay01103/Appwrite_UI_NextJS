import React, { useEffect, useState } from "react"
import { toScale, type Scale } from "../utils/toScale"

import AuthShot from "../assets/auth-shot.png"
import DatabasesShot from "../db-shot.png"
import FunctionsShot from "../fn-shot.png"
import StorageShot from "../storage-shot.png"
import RealtimeShot from "../realtime-shot.png"

export const Products = () => {
  let scrollInfo = {
    percentage: 0,
    traversed: 0,
    remaning: Infinity,
  }

  //products info
  const products = ["auth", "databases", "storage", "functions", "realtime", "post"] as const
  type Product = (typeof products)[number]

  type ProductInfo = {
    icon: {
      active: string
      inactive: string
    }
    title: string
    subtitle: string
    description: string
    features: string[]
    shot?: any
  }

  const animScale: Scale = [0.075, 1]
  const productsScales = products.map((_, idx) => {
    const diff = animScale[1] - animScale[0]
    const step = diff / products.length
    return [animScale[0] + step * idx, animScale[0] + step * (idx + 1)] as Scale
  })

  const [active, setActive] = useState(() => {
    let activeIdx = productsScales.findIndex(([min, max]) => {
      return scrollInfo.percentage >= min && scrollInfo.percentage < max
    })

    const [lastActive, setLastActive] = useState<Product | undefined>(undefined)
    const [elId, setElId] = useState(0)

    const product = products[activeIdx] as Product | undefined
    const scale = productsScales[activeIdx] as Scale | undefined
    const percent = scale ? toScale(scrollInfo.percentage, scale, [0, 1]) : 0

    return {
      product,
      scale,
      percent,
    }
  })

  useEffect(() => {
    // Update the active state whenever scrollInfo or productsScales changes
    setActive(() => {
      let activeIdx = productsScales.findIndex(([min, max]) => {
        return scrollInfo.percentage >= min && scrollInfo.percentage < max
      })

      const product = products[activeIdx] as Product | undefined
      const scale = productsScales[activeIdx] as Scale | undefined
      const percent = scale ? toScale(scrollInfo.percentage, scale, [0, 1]) : 0

      return {
        product,
        scale,
        percent,
      }
    })
  }, [scrollInfo, productsScales])

  let lastActive: Product | undefined = undefined

  const infos: { [K in Product]?: ProductInfo } = {
    auth: {
      icon: {
        active: "./images/icons/illustrated/dark/auth.png",
        inactive: "./images/icons/illustrated/dark/auth-transparent.png",
      },
      title: "Auth",
      subtitle: "Secure login for all users",
      description:
        "Authenticate users securely with multiple login methods like Email/Password, SMS, OAuth, Anonymous, Magic URLs and more.",
      features: [
        "30+ login methods",
        "Support for teams, roles and user labels",
        "Rate-limits and advanced user protection",
        "Custom SMTP and email templates",
      ],
      shot: AuthShot,
    },
    databases: {
      icon: {
        active: "./images/icons/illustrated/dark/databases.png",
        inactive: "./images/icons/illustrated/dark/databases-transparent.png",
      },
      title: "Databases",
      subtitle: "Store, query and manage data",
      description: "Scalable and robust database backed by your favorite technologies.",
      features: [
        "Never paused",
        "Fast in-memory caching",
        "Advanced permission models",
        "Custom data validation",
        "Relationships support",
      ],
      shot: DatabasesShot,
    },
    functions: {
      icon: {
        active: "./images/icons/illustrated/dark/functions.png",
        inactive: "./images/icons/illustrated/dark/functions-transparent.png",
      },
      title: "Functions",
      subtitle: "Customize and extend your backend",
      description: "Deploy and scale serverless functions in secure, isolated runtimes.",
      features: [
        "Automatic deployment from GitHub",
        "Trigger using GitHub, CLI, Event Listeners or HTTP requests",
        "Support for 30+ runtimes in 13 languages",
        "Custom domain support",
      ],
      shot: FunctionsShot,
    },
    storage: {
      icon: {
        active: "./images/icons/illustrated/dark/storage.png",
        inactive: "./images/icons/illustrated/dark/storage-transparent.png",
      },
      title: "Storage",
      subtitle: "Upload and manage files",
      description:
        "Securely store files with advanced compression, encryption and image transformations.",
      features: [
        "File encryption at rest and transit",
        "Built-in image transformation capabilities",
        "Advanced compression with WebP/Brotli support",
      ],
      shot: StorageShot,
    },
    realtime: {
      icon: {
        active: "./images/icons/illustrated/dark/realtime.png",
        inactive: "./images/icons/illustrated/dark/realtime-transparent.png",
      },
      title: "Realtime",
      subtitle: "Realtime events for every service",
      description: "Subscribe and react to any Appwrite event using the Realtime API.",
      features: [
        "Unlimited subscriptions",
        "Built-in permission management",
        "Support for DBs, Auth, Storage & Functions",
      ],
      shot: RealtimeShot,
    },
  }

  return <div>Products</div>
}
