import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostApiPdfWkhtmltopdfRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.WkHtmlToPdfRequestDto;
}


export class PostApiPdfWkhtmltopdfResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseDto?: shared.ErrorResponseDto;

  @SpeakeasyMetadata()
  postApiPdfWkhtmltopdf200ApplicationPdfBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  pdfResponseDto?: shared.PdfResponseDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
