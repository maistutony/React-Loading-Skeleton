import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Container, Col,Row } from "react-bootstrap";

const ProductsSectionSkeleton = () => {
  const skeletonArray = [...Array(6)]; // Change 12 to the number of products you want to display

  return (
    <Container fluid>
      <Row>
        {skeletonArray.map((item, index) => (
          <Col key={index} md={3}>
            <div className="product-image">
              <Skeleton height={350} />
            </div>
            <Row>
              <Skeleton />
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsSectionSkeleton;
