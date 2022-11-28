import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAdminRequestsRemoveByMetadataRequestBodyStringEquals extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseInsensitive" })
  caseInsensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=equalTo" })
  equalTo: boolean;
}


export class PostAdminRequestsRemoveByMetadataRequestBodyStringContains extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contains" })
  contains: string;
}


export class PostAdminRequestsRemoveByMetadataRequestBodyRegularExpressionMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matches" })
  matches: string;
}


export class PostAdminRequestsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doesNotMatch" })
  doesNotMatch: string;
}


export class PostAdminRequestsRemoveByMetadataRequestBodyJsonEquals extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=equalToJson" })
  equalToJson: string;
}


export class PostAdminRequestsRemoveByMetadataRequestBodyJsonPathMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ignoreArrayOrder" })
  ignoreArrayOrder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ignoreExtraElements" })
  ignoreExtraElements?: boolean;

  @SpeakeasyMetadata({ data: "json, name=matchesJsonPath" })
  matchesJsonPath: string;
}


export class PostAdminRequestsRemoveByMetadataRequestBodyXmlEquality extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=equalToXml" })
  equalToXml: string;
}


export class PostAdminRequestsRemoveByMetadataRequestBodyXPathMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matchesXpath" })
  matchesXpath: string;

  @SpeakeasyMetadata({ data: "json, name=namespaces" })
  namespaces?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=valuePattern" })
  valuePattern?: Map<string, any>;
}


export class PostAdminRequestsRemoveByMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostAdminRequestsRemoveByMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
