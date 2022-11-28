import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PdfMetadataDto } from "./pdfmetadatadto";



// FoRequestDto
/** 
 * The basic request with the XSL-FO document as a Base64 encoded string with a set of resources provided with a name and the data of the resource as a Base64 encoded string.
**/
export class FoRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FoDocumentBase64String" })
  foDocumentBase64String?: string;

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata?: PdfMetadataDto;

  @SpeakeasyMetadata({ data: "json, name=Resources" })
  resources?: Map<string, string>;
}
