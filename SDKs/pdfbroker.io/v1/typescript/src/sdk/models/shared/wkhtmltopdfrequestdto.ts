import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WkHtmlToPdfRequestDto
/** 
 * WkHtmlToPdfRequestDto is the data transfer object for generating a pdf using wkhtmltopdf;
**/
export class WkHtmlToPdfRequestDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=HtmlBase64String" })
  htmlBase64String?: string;

  @Metadata({ data: "json, name=Resources" })
  resources?: Map<string, string>;

  @Metadata({ data: "json, name=Url" })
  url?: string;

  @Metadata({ data: "json, name=WkHtmlToPdfArguments" })
  wkHtmlToPdfArguments?: Map<string, string>;
}
