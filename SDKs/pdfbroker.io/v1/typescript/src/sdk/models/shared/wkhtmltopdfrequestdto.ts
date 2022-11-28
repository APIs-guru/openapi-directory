import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WkHtmlToPdfRequestDto
/** 
 * WkHtmlToPdfRequestDto is the data transfer object for generating a pdf using wkhtmltopdf;
**/
export class WkHtmlToPdfRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HtmlBase64String" })
  htmlBase64String?: string;

  @SpeakeasyMetadata({ data: "json, name=Resources" })
  resources?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=WkHtmlToPdfArguments" })
  wkHtmlToPdfArguments?: Map<string, string>;
}
