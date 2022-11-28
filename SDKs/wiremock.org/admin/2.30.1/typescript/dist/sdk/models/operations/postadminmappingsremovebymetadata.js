var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
var PostAdminMappingsRemoveByMetadataRequestBodyStringEquals = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRemoveByMetadataRequestBodyStringEquals, _super);
    function PostAdminMappingsRemoveByMetadataRequestBodyStringEquals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caseInsensitive" }),
        __metadata("design:type", Boolean)
    ], PostAdminMappingsRemoveByMetadataRequestBodyStringEquals.prototype, "caseInsensitive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=equalTo" }),
        __metadata("design:type", Boolean)
    ], PostAdminMappingsRemoveByMetadataRequestBodyStringEquals.prototype, "equalTo", void 0);
    return PostAdminMappingsRemoveByMetadataRequestBodyStringEquals;
}(SpeakeasyBase));
export { PostAdminMappingsRemoveByMetadataRequestBodyStringEquals };
var PostAdminMappingsRemoveByMetadataRequestBodyStringContains = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRemoveByMetadataRequestBodyStringContains, _super);
    function PostAdminMappingsRemoveByMetadataRequestBodyStringContains() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contains" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRemoveByMetadataRequestBodyStringContains.prototype, "contains", void 0);
    return PostAdminMappingsRemoveByMetadataRequestBodyStringContains;
}(SpeakeasyBase));
export { PostAdminMappingsRemoveByMetadataRequestBodyStringContains };
var PostAdminMappingsRemoveByMetadataRequestBodyRegularExpressionMatch = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRemoveByMetadataRequestBodyRegularExpressionMatch, _super);
    function PostAdminMappingsRemoveByMetadataRequestBodyRegularExpressionMatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matches" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRemoveByMetadataRequestBodyRegularExpressionMatch.prototype, "matches", void 0);
    return PostAdminMappingsRemoveByMetadataRequestBodyRegularExpressionMatch;
}(SpeakeasyBase));
export { PostAdminMappingsRemoveByMetadataRequestBodyRegularExpressionMatch };
var PostAdminMappingsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch, _super);
    function PostAdminMappingsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doesNotMatch" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch.prototype, "doesNotMatch", void 0);
    return PostAdminMappingsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch;
}(SpeakeasyBase));
export { PostAdminMappingsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch };
var PostAdminMappingsRemoveByMetadataRequestBodyJsonEquals = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRemoveByMetadataRequestBodyJsonEquals, _super);
    function PostAdminMappingsRemoveByMetadataRequestBodyJsonEquals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=equalToJson" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRemoveByMetadataRequestBodyJsonEquals.prototype, "equalToJson", void 0);
    return PostAdminMappingsRemoveByMetadataRequestBodyJsonEquals;
}(SpeakeasyBase));
export { PostAdminMappingsRemoveByMetadataRequestBodyJsonEquals };
var PostAdminMappingsRemoveByMetadataRequestBodyJsonPathMatch = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRemoveByMetadataRequestBodyJsonPathMatch, _super);
    function PostAdminMappingsRemoveByMetadataRequestBodyJsonPathMatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignoreArrayOrder" }),
        __metadata("design:type", Boolean)
    ], PostAdminMappingsRemoveByMetadataRequestBodyJsonPathMatch.prototype, "ignoreArrayOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignoreExtraElements" }),
        __metadata("design:type", Boolean)
    ], PostAdminMappingsRemoveByMetadataRequestBodyJsonPathMatch.prototype, "ignoreExtraElements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchesJsonPath" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRemoveByMetadataRequestBodyJsonPathMatch.prototype, "matchesJsonPath", void 0);
    return PostAdminMappingsRemoveByMetadataRequestBodyJsonPathMatch;
}(SpeakeasyBase));
export { PostAdminMappingsRemoveByMetadataRequestBodyJsonPathMatch };
var PostAdminMappingsRemoveByMetadataRequestBodyXmlEquality = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRemoveByMetadataRequestBodyXmlEquality, _super);
    function PostAdminMappingsRemoveByMetadataRequestBodyXmlEquality() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=equalToXml" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRemoveByMetadataRequestBodyXmlEquality.prototype, "equalToXml", void 0);
    return PostAdminMappingsRemoveByMetadataRequestBodyXmlEquality;
}(SpeakeasyBase));
export { PostAdminMappingsRemoveByMetadataRequestBodyXmlEquality };
var PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch, _super);
    function PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchesXpath" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch.prototype, "matchesXpath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namespaces" }),
        __metadata("design:type", Map)
    ], PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch.prototype, "namespaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valuePattern" }),
        __metadata("design:type", Map)
    ], PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch.prototype, "valuePattern", void 0);
    return PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch;
}(SpeakeasyBase));
export { PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch };
var PostAdminMappingsRemoveByMetadataRequest = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRemoveByMetadataRequest, _super);
    function PostAdminMappingsRemoveByMetadataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostAdminMappingsRemoveByMetadataRequest.prototype, "request", void 0);
    return PostAdminMappingsRemoveByMetadataRequest;
}(SpeakeasyBase));
export { PostAdminMappingsRemoveByMetadataRequest };
var PostAdminMappingsRemoveByMetadataResponse = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRemoveByMetadataResponse, _super);
    function PostAdminMappingsRemoveByMetadataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAdminMappingsRemoveByMetadataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAdminMappingsRemoveByMetadataResponse.prototype, "statusCode", void 0);
    return PostAdminMappingsRemoveByMetadataResponse;
}(SpeakeasyBase));
export { PostAdminMappingsRemoveByMetadataResponse };
