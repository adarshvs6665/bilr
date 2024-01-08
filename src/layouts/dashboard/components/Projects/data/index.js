/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Products", accessor: "product", width: "45%", align: "left" },
      { Header: "Availability", accessor: "availability", width: "10%", align: "left" },
      { Header: "Total Sales", accessor: "sale", align: "center" },
    ],

    rows: [
      {
        product: <Company image={logoXD} name="xd" />,
        availability: (
          <MDBox display="flex" py={1}>
            504 in stock
          </MDBox>
        ),
        sale: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $14,000
          </MDTypography>
        ),
      },
      {
        product: <Company image={logoAtlassian} name="at" />,
        availability: (
          <MDBox display="flex" py={1}>
            86 in stock
          </MDBox>
        ),
        sale: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $3,000
          </MDTypography>
        ),
      },
      {
        product: <Company image={logoAtlassian} name="at" />,
        availability: (
          <MDBox display="flex" py={1}>
            86 in stock
          </MDBox>
        ),
        sale: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $3,000
          </MDTypography>
        ),
      },
      {
        product: <Company image={logoAtlassian} name="at" />,
        availability: (
          <MDBox display="flex" py={1}>
            86 in stock
          </MDBox>
        ),
        sale: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $3,000
          </MDTypography>
        ),
      },
      {
        product: <Company image={logoAtlassian} name="at" />,
        availability: (
          <MDBox display="flex" py={1}>
            86 in stock
          </MDBox>
        ),
        sale: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $3,000
          </MDTypography>
        ),
      },
      {
        product: <Company image={logoAtlassian} name="at" />,
        availability: (
          <MDBox display="flex" py={1}>
            86 in stock
          </MDBox>
        ),
        sale: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $3,000
          </MDTypography>
        ),
      },
    ],
  };
}
