import { IdentityProp } from '../interfaces'

function Cell({
    id
}: IdentityProp): JSX.Element {
    return (
        <article id={id}>
        </article>
    )
}

export default Cell
