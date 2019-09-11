import React, { ReactElement, ReactNode } from "react"
import {
	button,
	highPriority,
	defaultPriority,
	lowPriority,
	subtlePriority,
	defaultSize,
	smallSize,
	icon,
	iconLeft,
	iconRight
} from "./styles"

type Priority = "high" | "default" | "low" | "subtle"
type IconSide = "left" | "right"
type Size = "default" | "small"

const priorities: {
	[key in Priority]: any
} = {
	high: highPriority,
	default: defaultPriority,
	low: lowPriority,
	subtle: subtlePriority
}
const iconSides: {
	[key in IconSide]: any
} = {
	right: iconLeft,
	left: iconRight
}
const sizes: {
	[key in Size]: any
} = {
	default: defaultSize,
	small: smallSize
}
const Button = ({
	priority,
	size,
	icon: iconSvg,
	iconSide,
	children,
	...props
}: {
	priority: Priority
	size: Size
	icon?: ReactElement
	iconSide?: IconSide
	children?: ReactNode
}) => {
	const buttonContents = [children]

	if (iconSvg) {
		buttonContents.push(React.cloneElement(iconSvg, { key: "svg" }))
	}

	return (
		<button
			css={[
				button,
				priorities[priority],
				sizes[size],
				iconSvg ? icon : "",
				iconSide ? iconSides[iconSide] : ""
			]}
			{...props}
		>
			{buttonContents}
		</button>
	)
}
const defaultProps = {
	"aria-label": null,
	type: "button",
	disabled: false,
	priority: "default",
	size: "default",
	icon: null,
	iconSide: null
}

Button.defaultProps = { ...defaultProps }

export { Button }
