// Função para rastrear conversões do Google Analytics
export const gtag_report_conversion = (url: string) => {
  const callback = () => {
    if (url) {
      window.location.href = url;
    }
  };

  // @ts-expect-error - gtag é injetado via script no layout
  gtag('event', 'conversion', {
    'send_to': 'AW-17161658555/J0UVCJL8utUaELvBqPc_',
    'value': 1.0,
    'currency': 'BRL',
    'event_callback': callback
  });
  return false;
};
