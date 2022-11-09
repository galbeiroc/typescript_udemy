let logged;

function sendAnalyticsData(data: string) {
  console.log(data);
  logged=true;
}

sendAnalyticsData('The data');