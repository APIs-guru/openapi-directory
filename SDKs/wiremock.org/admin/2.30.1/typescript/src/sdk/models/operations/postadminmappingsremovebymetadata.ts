import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAdminMappingsRemoveByMetadataRequestBodyStringEquals extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseInsensitive" })
  caseInsensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=equalTo" })
  equalTo: boolean;
}


export class PostAdminMappingsRemoveByMetadataRequestBodyStringContains extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contains" })
  contains: string;
}


export class PostAdminMappingsRemoveByMetadataRequestBodyRegularExpressionMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matches" })
  matches: string;
}


export class PostAdminMappingsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doesNotMatch" })
  doesNotMatch: string;
}


export class PostAdminMappingsRemoveByMetadataRequestBodyJsonEquals extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=equalToJson" })
  equalToJson: string;
}


export class PostAdminMappingsRemoveByMetadataRequestBodyJsonPathMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ignoreArrayOrder" })
  ignoreArrayOrder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ignoreExtraElements" })
  ignoreExtraElements?: boolean;

  @SpeakeasyMetadata({ data: "json, name=matchesJsonPath" })
  matchesJsonPath: string;
}


export class PostAdminMappingsRemoveByMetadataRequestBodyXmlEquality extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=equalToXml" })
  equalToXml: string;
}


export class PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matchesXpath" })
  matchesXpath: string;

  @SpeakeasyMetadata({ data: "json, name=namespaces" })
  namespaces?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=valuePattern" })
  valuePattern?: Map<string, any>;
}


export class PostAdminMappingsRemoveByMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostAdminMappingsRemoveByMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
