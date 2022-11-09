import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExportNsxRecommendedRulesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class ExportNsxRecommendedRulesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.RecommendedRulesRequest;

  @Metadata()
  security: ExportNsxRecommendedRulesSecurity;
}


export class ExportNsxRecommendedRulesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  exportNsxRecommendedRules200ApplicationOctetStreamBinaryString?: Uint8Array;
}
