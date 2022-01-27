import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Placeholder from "react-bootstrap/Placeholder";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FlexGrowLayout } from "../../components/Layouts/Layouts";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { selectUserProfile } from "../../redux/reducers/userProfileSlice";
import { userProfileActions } from "../../redux/sagas/userProfileSagas";

const ProfilePage: NextPage = () => {
  const dispatch = useAppDispatch();
  const userProfile = useAppSelector(selectUserProfile);
  const { isLoading, data } = userProfile;
  const router = useRouter();
  const { id } = router.query;

  const {
    phone_number,
    email,
    created_at_naturaltime,
    updated_at_naturaltime,
    title,
    first_name,
    last_name,
    image,
  } = data;

  useEffect(() => {
    if (id) {
      dispatch({
        type: userProfileActions.FETCH,
        payload: { id },
      });
    }
  }, [id, dispatch]);

  return (
    <FlexGrowLayout>
      {isLoading ? (
        <Placeholder animation="glow">
          <Row className="text-center">
            <Col lg={6} className="my-auto">
              <Placeholder
                xs={4}
                style={{
                  height: "250px",
                  width: "250px",
                  borderRadius: "50%",
                  margin: "16px 0px",
                }}
              />
            </Col>
            <Col lg={6} className="my-auto">
              <Placeholder xs={8} as="p" style={{ height: "24px" }} />
              <Placeholder xs={10} as="p" style={{ height: "24px" }} />
              <Placeholder xs={8} as="p" style={{ height: "24px" }} />
              <Placeholder xs={7} as="p" style={{ height: "24px" }} />
              <Placeholder xs={9} as="p" style={{ height: "24px" }} />
            </Col>
          </Row>
        </Placeholder>
      ) : (
        <Row className="text-center position-relative">
          <div className="d-flex flex-row-reverse position-absolute py-2">
            <Image
              alt="more"
              width={24}
              height={24}
              src={"/svgs/vertical-dots.svg"}
            />
          </div>
          <Col lg={6} className="my-auto">
            <div
              style={{
                // weird margin value to get rid of the annoying default img tag padding
                margin: "13px 0px",
                fontSize: 0,
                lineHeight: 0,
                display: "inline-block",
                borderRadius: "50%",
                overflow: "hidden",
                border: "none",
              }}
            >
              <Image
                alt={`profile of ${email}`}
                src={image}
                width={250}
                height={250}
              />
            </div>
          </Col>
          <Col lg={6} className="my-auto">
            <p>
              {first_name} {last_name}, {title}
            </p>
            <p>{phone_number || "blank"}</p>
            <p>{email}</p>
            <p>member since: {created_at_naturaltime}</p>
            <p>last edited: {updated_at_naturaltime}</p>
          </Col>
        </Row>
      )}
    </FlexGrowLayout>
  );
};

export default ProfilePage;
