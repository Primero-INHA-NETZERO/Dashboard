import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppCurrentSubject from '../app-current-subject';
import AppConversionRates from '../app-conversion-rates';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        안녕하세요, 마켓사장님 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="금일 매출액"
            total={114000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="소비자 수"
            total={8}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="재고 발주 관리"
            total={-3}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="폐기물 관리"
            total={10}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="변동 매출액"
            subheader="전날보다 (+11%)"
            chart={{
              labels: [
                '07/02/2024',
                '07/03/2024',
                '07/04/2024',
                '07/05/2024',
                '07/06/2024',
                '07/07/2024',
                '07/08/2024',
                '07/09/2024',
                '07/10/2024',
                '07/11/2024',
              ],
              series: [
                {
                  name: '소비자 수',
                  type: 'area',
                  fill: 'gradient',
                  data: [9, 8, 10, 7, 3, 1, 5, 3, 6, 8, 9],
                },
                {
                  name: '재고 발주 관리',
                  type: 'column',
                  fill: 'solid',
                  data: [-5, -4, -5, -1, +2, -1, -2, -3, -4, -4, -5],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="시간대별 주문자 백분위"
            chart={{
              series: [
                { label: '6 ~ 6:30', value: 10 },
                { label: '6:30 ~ 7', value: 54 },
                { label: '7 ~ 7:30', value: 40 },
                { label: '7:30 ~ 8', value: 20 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="빵 종류별 매출 전환율"
            subheader="작년 대비 (+43%) 증가"
            chart={{
              series: [
                { label: '식빵', value: 300 },
                { label: '크로와상', value: 450 },
                { label: '바게트', value: 500 },
                { label: '시내롤', value: 600 },
                { label: '호두빵', value: 700 },
                { label: '카네이션', value: 750 },
                { label: '크림빵', value: 800 },
                { label: '프레첼', value: 900 },
                { label: '마카롱', value: 950 },
                { label: '베이글', value: 1000 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="나이대, 성별에 따른 판매"
            chart={{
              categories: [
                '10대 남성',
                '10대 여성',
                '20대 남성',
                '20대 여성',
                '30대 남성',
                '30대 여성',
                '40대 남성',
                '40대 여성',
                '50대 남성',
                '50대 여성',
                '60대 남성',
                '60대 여성',
              ],
              series: [
                { name: '판매량', data: [30, 25, 50, 45, 40, 35, 20, 15, 10, 5, 5, 2] },
                { name: '환불', data: [5, 3, 8, 6, 7, 5, 4, 3, 2, 1, 1, 0.5] },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
