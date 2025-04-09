import { Box, Typography } from "@mui/material";
import LogoImage from '../assets/logo.png';

const Footer = () => {
    return(
        <Box sx={{ textAlign: 'center', mt: 10, pb: 5 }}>
            <Box
                component="img"
                src={LogoImage}
                alt="서비스 로고"
                sx={{ width: 80, mb: 1.5 }}
            />
            <br/>
            <Typography variant="caption">
            ✨ 본 서비스 내 이미지 및 콘텐츠의 저작권은 '나'에 있습니다.<br />
            수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.
            </Typography>
        </Box>
    );
}

export default Footer;