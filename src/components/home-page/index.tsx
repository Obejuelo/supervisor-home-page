import { Box, Button, Grid, Typography } from "@mui/material";

import { DoneIcon } from "./icons/done-icon";
import { LinkItem } from "./link-item";
import { styles } from "./styles";

const HomePage: React.FC = () => {
  return (
    <Box width={1}>
      <Box
        p={{
          xs: "1rem 1rem 5.5rem 1rem",
          md: "2rem 2rem 7.5rem 2rem",
          lg: "5rem 5rem 7.5rem 5rem",
        }}
        bgcolor="#F5F2FF"
        display="flex"
        justifyContent="center"
        overflow="hidden"
        height="max-content"
        position="relative"
        sx={styles.afterHeader}
      >
        <Grid
          container
          width={{ xs: "100%", md: "62.5rem" }}
          justifyContent={{ xs: "center" }}
          spacing={3}
        >
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography sx={{ ...styles.title, color: "#18191F" }}>
              Bienvenido al futuro con{" "}
              <Typography
                variant="caption"
                sx={{ ...styles.title, color: "#7C4DFF" }}
              >
                Supervisor AI
              </Typography>
            </Typography>
            <Typography mt={1}>
              Descubre una nueva perspectiva de la realidad: olvídate de las
              suposiciones sobre lo que realmente quieren tus clientes. Con
              nuestra inteligencia artificial, transformamos cada interacción en
              una oportunidad valiosa para tu negocio.
            </Typography>
            <Box display="flex" alignItems="center" mt={1}>
              <DoneIcon />
              <Typography>
                <Typography variant="caption" sx={styles.highlighLabel}>
                  Evalúa
                </Typography>{" "}
                a tu equipo
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <DoneIcon />
              <Typography>
                Descubre{" "}
                <Typography variant="caption" sx={styles.highlighLabel}>
                  oportunidades
                </Typography>{" "}
                de venta
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <DoneIcon />
              <Typography>
                Identifica{" "}
                <Typography variant="caption" sx={styles.highlighLabel}>
                  riesgos
                </Typography>{" "}
                de tu negocio
              </Typography>
            </Box>
          </Grid>
          <Grid
            order={{ xs: 1, md: 2 }}
            justifyContent="center"
            display="flex"
            xs={12}
            md={6}
            item
          >
            <img src="assets/home.gif" width={340} alt="gif" />
          </Grid>
        </Grid>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        p={{
          xs: "2rem 1rem",
          md: "2rem",
          lg: "4rem 5rem 4rem 5rem",
        }}
      >
        <Grid container spacing={2} width={{ xs: "100%", md: "62.5rem" }}>
          <Grid item xs={12} md={6}>
            <Box sx={styles.linksContent} height={{ md: "29rem" }}>
              <Typography sx={styles.linksTitle} mb={2.5}>
                Comienza
              </Typography>
              <LinkItem
                img="assets/tools.png"
                title="Conecta tus herramientas de trabajo"
                label="Oct 15 · 1 min de lectura"
                link="#" //TODO: Change link navigation
              />
              <LinkItem
                img="assets/config.png"
                title="Aprende como configurar los Supervisores AI"
                label="Oct 15 ·  4 min de lectura"
                link="#" //TODO: Change link navigation
              />
              <LinkItem
                img="assets/phone.png"
                title="Realiza tu primer reunión inteligente"
                label="Oct 15 ·  2 min de lectura"
                link="#" //TODO: Change link navigation
              />
              <LinkItem
                img="assets/analytics.png"
                title="Analiza a detalle la información de tu reunión"
                label="Oct 15 ·  3 min de lectura"
                link="#" //TODO: Change link navigation
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={styles.linksContent}
            >
              <img src="assets/question.png" alt="question" width={80} />
              <Typography sx={styles.linksTitle} align="center">
                ¿Necesitas ayuda?
              </Typography>
              <Typography align="center">
                ¿Tienes alguna pregunta o quieres información sobre la
                plataforma? Te ayudamos
              </Typography>
              <Button
                variant="outlined"
                fullWidth
                href="#" //TODO: Change link navigation or add function navigate
                sx={styles.helpButton}
              >
                Ir a centro de ayuda
              </Button>
            </Box>
            <Box
              mt={3}
              display="flex"
              position="relative"
              sx={styles.moreContent}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                width="50%"
                pr={2}
              >
                <img src="assets/plans.png" alt="plans" width={80} />
                <Typography sx={styles.linksTitle} mt={2} align="center">
                  Planes y paquetes
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={styles.moreButton}
                  href="#" //TODO: Change link navigation or add function navigate
                >
                  Ver más
                </Button>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                width="50%"
                pl={2}
              >
                <img src="assets/services.png" alt="plans" width={80} />
                <Typography sx={styles.linksTitle} mt={2} align="center">
                  Servicios adicionales
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={styles.moreButton}
                  href="#" //TODO: Change link navigation or add function navigate
                >
                  Ver más
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export { HomePage };
