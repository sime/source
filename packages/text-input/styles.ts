import { css } from "@emotion/core"
import { size, palette, space } from "@guardian/src-foundations"
import { textSans } from "@guardian/src-foundations/typography"
import { focusHalo } from "@guardian/src-foundations/accessibility"
import {
	textInputLight,
	TextInputTheme,
} from "@guardian/src-foundations/themes"

export const textInput = ({
	textInput,
}: { textInput: TextInputTheme } = textInputLight) => css`
	height: ${size.large}px;
	${textSans.medium()};
	color: ${textInput.textInput};
	background-color: ${textInput.backgroundInput};
	border: 2px solid ${palette.border.textInput};
	padding: 0 ${space[2]}px;

	&:focus {
		${focusHalo};
	}
`

export const widthFluid = css`
	width: 100%;
`

export const width30 = css`
	width: 30ch;
`

export const width10 = css`
	width: 10ch;
`

export const width4 = css`
	width: 4ch;
`

export const text = ({
	textInput,
}: { textInput: TextInputTheme } = textInputLight) => css`
	${textSans.medium()};
	color: ${textInput.textLabel};
	margin-bottom: ${space[1]}px;
`

export const errorInput = css`
	border: 4px solid ${palette.border.error};
	color: ${palette.text.error};
`

export const optionalLabel = css`
	${textSans.small()};
	color: ${palette.text.secondary};
	font-style: italic;
`

export const supportingText = css`
	${textSans.small()};
	color: ${palette.text.secondary};
	margin-bottom: ${space[1]}px;
`
