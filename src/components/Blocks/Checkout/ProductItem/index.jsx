import React from "react"
import { Row, Col, Container } from "react-grid-system"
import { LabelMedium, H6 } from "baseui/typography"
import { useStyletron } from "baseui"

const ProductItem = ({ item }) => {
    const [css, theme] = useStyletron()

    return (
        <Container>
            <Row justify="start" align="center">
                <Col sm={12} xs={12} md={6} lg={6}>
                    <img
                        className={css({
                            width: "100%",
                            height: "8rem",
                            objectFit: "contain",
                        })}
                        src={item.images[0]}
                        alt=""
                    />
                </Col>
                <Col sm={12} xs={12} md={6} lg={6} style={{ padding: "1rem" }}>
                    <H6 margin="0">{item.name}</H6>
                    <LabelMedium color={theme.colors.primary600}>
                        Qty: {item.qty}
                    </LabelMedium>
                    <LabelMedium color={theme.colors.primary600}>
                        Price:{" "}
                        <span
                            className={css({
                                color: theme.colors.negative600,
                            })}
                        >
                            {item.price}
                        </span>
                    </LabelMedium>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductItem
