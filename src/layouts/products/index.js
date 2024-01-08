// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Bilr React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Bilr React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import data from "./data/projectsTableData";
import MDButton from "components/MDButton";
import { Icon } from "@mui/material";

function Products() {
  const { columns, rows } = data();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <MDTypography variant="h6" color="white">
                  Product Table
                </MDTypography>
                <MDButton variant="gradient" color="light">
                  <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                  &nbsp;add new product
                </MDButton>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Products;
