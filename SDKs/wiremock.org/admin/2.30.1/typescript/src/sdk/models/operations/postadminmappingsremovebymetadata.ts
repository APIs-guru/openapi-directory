import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAdminMappingsRemoveByMetadataRequestBodyStringEquals extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseInsensitive" })
  caseInsensitive?: boolean;

  @Metadata({ data: "json, name=equalTo" })
  equalTo: boolean;
}


export class PostAdminMappingsRemoveByMetadataRequestBodyStringContains extends SpeakeasyBase {
  @Metadata({ data: "json, name=contains" })
  contains: string;
}


export class PostAdminMappingsRemoveByMetadataRequestBodyRegularExpressionMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=matches" })
  matches: string;
}


export class PostAdminMappingsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=doesNotMatch" })
  doesNotMatch: string;
}


export class PostAdminMappingsRemoveByMetadataRequestBodyJsonEquals extends SpeakeasyBase {
  @Metadata({ data: "json, name=equalToJson" })
  equalToJson: string;
}


export class PostAdminMappingsRemoveByMetadataRequestBodyJsonPathMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=ignoreArrayOrder" })
  ignoreArrayOrder?: boolean;

  @Metadata({ data: "json, name=ignoreExtraElements" })
  ignoreExtraElements?: boolean;

  @Metadata({ data: "json, name=matchesJsonPath" })
  matchesJsonPath: string;
}


export class PostAdminMappingsRemoveByMetadataRequestBodyXmlEquality extends SpeakeasyBase {
  @Metadata({ data: "json, name=equalToXml" })
  equalToXml: string;
}


export class PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=matchesXpath" })
  matchesXpath: string;

  @Metadata({ data: "json, name=namespaces" })
  namespaces?: Map<string, any>;

  @Metadata({ data: "json, name=valuePattern" })
  valuePattern?: Map<string, any>;
}


export class PostAdminMappingsRemoveByMetadataRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostAdminMappingsRemoveByMetadataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
