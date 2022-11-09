import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * WkHtmlToPdfRequestDto is the data transfer object for generating a pdf using wkhtmltopdf;
**/
export declare class WkHtmlToPdfRequestDto extends SpeakeasyBase {
    htmlBase64String?: string;
    resources?: Map<string, string>;
    url?: string;
    wkHtmlToPdfArguments?: Map<string, string>;
}
