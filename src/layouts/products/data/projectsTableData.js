/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
// @mui material components
import Icon from "@mui/material/Icon";

// Bilr React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import logoGithub from "assets/images/small-logos/github.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

export default function data() {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "product", accessor: "product", width: "30%", align: "left" },
      { Header: "category", accessor: "category", align: "left" },
      { Header: "price", accessor: "price", align: "center" },
      { Header: "barcode", accessor: "barcode", align: "center" },
      { Header: "quantity", accessor: "quantity", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        product: <Project image={LogoAsana} name="Asana" />,
        category: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            health
          </MDTypography>
        ),
        price: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            6250
          </MDTypography>
        ),
        barcode: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            58954874512
          </MDTypography>
        ),
        quantity: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            6250
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="sucess" fontWeight="medium">
            in stock
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>edit</Icon>
            <Icon>delete</Icon>
          </MDTypography>
        ),
      },
      {
        product: <Project image={LogoAsana} name="Asana" />,
        category: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            health
          </MDTypography>
        ),
        price: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            6250
          </MDTypography>
        ),
        barcode: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            58954874512
          </MDTypography>
        ),
        quantity: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="danger" fontWeight="medium">
            out of stock
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>edit</Icon>
            <Icon>delete</Icon>
          </MDTypography>
        ),
      },
      {
        product: <Project image={LogoAsana} name="Asana" />,
        category: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            health
          </MDTypography>
        ),
        price: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            6250
          </MDTypography>
        ),
        barcode: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            58954874512
          </MDTypography>
        ),
        quantity: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            6250
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="danger" fontWeight="medium">
            out of stock
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>edit</Icon>
            <Icon>delete</Icon>
          </MDTypography>
        ),
      },
      {
        product: <Project image={LogoAsana} name="Asana" />,
        category: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            health
          </MDTypography>
        ),
        price: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            6250
          </MDTypography>
        ),
        barcode: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            58954874512
          </MDTypography>
        ),
        quantity: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            6250
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="sucess" fontWeight="medium">
            in stock
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>edit</Icon>
            <Icon>delete</Icon>
          </MDTypography>
        ),
      },
    ],
  };
}
