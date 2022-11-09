import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAdminRequestsRemoveByMetadataRequestBodyStringEquals extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseInsensitive" })
  caseInsensitive?: boolean;

  @Metadata({ data: "json, name=equalTo" })
  equalTo: boolean;
}


export class PostAdminRequestsRemoveByMetadataRequestBodyStringContains extends SpeakeasyBase {
  @Metadata({ data: "json, name=contains" })
  contains: string;
}


export class PostAdminRequestsRemoveByMetadataRequestBodyRegularExpressionMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=matches" })
  matches: string;
}


export class PostAdminRequestsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=doesNotMatch" })
  doesNotMatch: string;
}


export class PostAdminRequestsRemoveByMetadataRequestBodyJsonEquals extends SpeakeasyBase {
  @Metadata({ data: "json, name=equalToJson" })
  equalToJson: string;
}


export class PostAdminRequestsRemoveByMetadataRequestBodyJsonPathMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=ignoreArrayOrder" })
  ignoreArrayOrder?: boolean;

  @Metadata({ data: "json, name=ignoreExtraElements" })
  ignoreExtraElements?: boolean;

  @Metadata({ data: "json, name=matchesJsonPath" })
  matchesJsonPath: string;
}


export class PostAdminRequestsRemoveByMetadataRequestBodyXmlEquality extends SpeakeasyBase {
  @Metadata({ data: "json, name=equalToXml" })
  equalToXml: string;
}


export class PostAdminRequestsRemoveByMetadataRequestBodyXPathMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=matchesXpath" })
  matchesXpath: string;

  @Metadata({ data: "json, name=namespaces" })
  namespaces?: Map<string, any>;

  @Metadata({ data: "json, name=valuePattern" })
  valuePattern?: Map<string, any>;
}


export class PostAdminRequestsRemoveByMetadataRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostAdminRequestsRemoveByMetadataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
