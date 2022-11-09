import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostApiPdfWkhtmltopdfRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.WkHtmlToPdfRequestDto;
}


export class PostApiPdfWkhtmltopdfResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseDto?: shared.ErrorResponseDto;

  @Metadata()
  postApiPdfWkhtmltopdf200ApplicationPdfBinaryString?: Uint8Array;

  @Metadata()
  pdfResponseDto?: shared.PdfResponseDto;

  @Metadata()
  statusCode: number;
}
