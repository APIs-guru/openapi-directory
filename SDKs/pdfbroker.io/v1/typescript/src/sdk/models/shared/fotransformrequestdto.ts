import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PdfMetadataDto } from "./pdfmetadatadto";



// FoTransformRequestDto
/** 
 * The XSL-FO transform document and xml data document as a Base64 encoded string with a set of resources provided with a name and the data of the resource as a Base64 encoded string.
**/
export class FoTransformRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FoDocumentBase64String" })
  foDocumentBase64String?: string;

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata?: PdfMetadataDto;

  @SpeakeasyMetadata({ data: "json, name=Resources" })
  resources?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=XmlDataDocumentBase64String" })
  xmlDataDocumentBase64String?: string;
}
