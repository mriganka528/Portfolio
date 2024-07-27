import {
    Html,
    Head,
    Font,
    Preview,
    Heading,
    Row,
    Section,
    Text,
} from '@react-email/components';
interface EmailProps {
    subject: string;
    message: string;
}
export default function EmailStruct({ subject, message }: EmailProps) {
    return (
        <Html lang="en" dir="ltr">
            <Head>
                <title>Message</title>
                <Font
                    fontFamily="Roboto"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
                        format: 'woff2',
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
            </Head>
            <Preview>Thank you for contacting with us!</Preview>
            <Section>
                <Row>
                    <Heading as="h2">Hi there!</Heading>
                </Row>
                <Row>
                    <Text>
                        Your message is successfully sent.
                    </Text>
                </Row>
                <Row>
                    <Text>Message : {message}</Text>
                </Row>
                <Row>
                    <Text>
                        Thanks for connecting with us. We&apos;ll try to catch you as soon as possible.😊😊
                    </Text>
                </Row>
            </Section>
        </Html>
    );
}