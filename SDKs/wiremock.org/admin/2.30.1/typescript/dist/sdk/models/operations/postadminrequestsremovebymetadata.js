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
var PostAdminRequestsRemoveByMetadataRequestBodyStringEquals = /** @class */ (function (_super) {
    __extends(PostAdminRequestsRemoveByMetadataRequestBodyStringEquals, _super);
    function PostAdminRequestsRemoveByMetadataRequestBodyStringEquals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caseInsensitive" }),
        __metadata("design:type", Boolean)
    ], PostAdminRequestsRemoveByMetadataRequestBodyStringEquals.prototype, "caseInsensitive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=equalTo" }),
        __metadata("design:type", Boolean)
    ], PostAdminRequestsRemoveByMetadataRequestBodyStringEquals.prototype, "equalTo", void 0);
    return PostAdminRequestsRemoveByMetadataRequestBodyStringEquals;
}(SpeakeasyBase));
export { PostAdminRequestsRemoveByMetadataRequestBodyStringEquals };
var PostAdminRequestsRemoveByMetadataRequestBodyStringContains = /** @class */ (function (_super) {
    __extends(PostAdminRequestsRemoveByMetadataRequestBodyStringContains, _super);
    function PostAdminRequestsRemoveByMetadataRequestBodyStringContains() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contains" }),
        __metadata("design:type", String)
    ], PostAdminRequestsRemoveByMetadataRequestBodyStringContains.prototype, "contains", void 0);
    return PostAdminRequestsRemoveByMetadataRequestBodyStringContains;
}(SpeakeasyBase));
export { PostAdminRequestsRemoveByMetadataRequestBodyStringContains };
var PostAdminRequestsRemoveByMetadataRequestBodyRegularExpressionMatch = /** @class */ (function (_super) {
    __extends(PostAdminRequestsRemoveByMetadataRequestBodyRegularExpressionMatch, _super);
    function PostAdminRequestsRemoveByMetadataRequestBodyRegularExpressionMatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matches" }),
        __metadata("design:type", String)
    ], PostAdminRequestsRemoveByMetadataRequestBodyRegularExpressionMatch.prototype, "matches", void 0);
    return PostAdminRequestsRemoveByMetadataRequestBodyRegularExpressionMatch;
}(SpeakeasyBase));
export { PostAdminRequestsRemoveByMetadataRequestBodyRegularExpressionMatch };
var PostAdminRequestsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch = /** @class */ (function (_super) {
    __extends(PostAdminRequestsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch, _super);
    function PostAdminRequestsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doesNotMatch" }),
        __metadata("design:type", String)
    ], PostAdminRequestsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch.prototype, "doesNotMatch", void 0);
    return PostAdminRequestsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch;
}(SpeakeasyBase));
export { PostAdminRequestsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch };
var PostAdminRequestsRemoveByMetadataRequestBodyJsonEquals = /** @class */ (function (_super) {
    __extends(PostAdminRequestsRemoveByMetadataRequestBodyJsonEquals, _super);
    function PostAdminRequestsRemoveByMetadataRequestBodyJsonEquals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=equalToJson" }),
        __metadata("design:type", String)
    ], PostAdminRequestsRemoveByMetadataRequestBodyJsonEquals.prototype, "equalToJson", void 0);
    return PostAdminRequestsRemoveByMetadataRequestBodyJsonEquals;
}(SpeakeasyBase));
export { PostAdminRequestsRemoveByMetadataRequestBodyJsonEquals };
var PostAdminRequestsRemoveByMetadataRequestBodyJsonPathMatch = /** @class */ (function (_super) {
    __extends(PostAdminRequestsRemoveByMetadataRequestBodyJsonPathMatch, _super);
    function PostAdminRequestsRemoveByMetadataRequestBodyJsonPathMatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignoreArrayOrder" }),
        __metadata("design:type", Boolean)
    ], PostAdminRequestsRemoveByMetadataRequestBodyJsonPathMatch.prototype, "ignoreArrayOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignoreExtraElements" }),
        __metadata("design:type", Boolean)
    ], PostAdminRequestsRemoveByMetadataRequestBodyJsonPathMatch.prototype, "ignoreExtraElements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchesJsonPath" }),
        __metadata("design:type", String)
    ], PostAdminRequestsRemoveByMetadataRequestBodyJsonPathMatch.prototype, "matchesJsonPath", void 0);
    return PostAdminRequestsRemoveByMetadataRequestBodyJsonPathMatch;
}(SpeakeasyBase));
export { PostAdminRequestsRemoveByMetadataRequestBodyJsonPathMatch };
var PostAdminRequestsRemoveByMetadataRequestBodyXmlEquality = /** @class */ (function (_super) {
    __extends(PostAdminRequestsRemoveByMetadataRequestBodyXmlEquality, _super);
    function PostAdminRequestsRemoveByMetadataRequestBodyXmlEquality() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=equalToXml" }),
        __metadata("design:type", String)
    ], PostAdminRequestsRemoveByMetadataRequestBodyXmlEquality.prototype, "equalToXml", void 0);
    return PostAdminRequestsRemoveByMetadataRequestBodyXmlEquality;
}(SpeakeasyBase));
export { PostAdminRequestsRemoveByMetadataRequestBodyXmlEquality };
var PostAdminRequestsRemoveByMetadataRequestBodyXPathMatch = /** @class */ (function (_super) {
    __extends(PostAdminRequestsRemoveByMetadataRequestBodyXPathMatch, _super);
    function PostAdminRequestsRemoveByMetadataRequestBodyXPathMatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchesXpath" }),
        __metadata("design:type", String)
    ], PostAdminRequestsRemoveByMetadataRequestBodyXPathMatch.prototype, "matchesXpath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namespaces" }),
        __metadata("design:type", Map)
    ], PostAdminRequestsRemoveByMetadataRequestBodyXPathMatch.prototype, "namespaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valuePattern" }),
        __metadata("design:type", Map)
    ], PostAdminRequestsRemoveByMetadataRequestBodyXPathMatch.prototype, "valuePattern", void 0);
    return PostAdminRequestsRemoveByMetadataRequestBodyXPathMatch;
}(SpeakeasyBase));
export { PostAdminRequestsRemoveByMetadataRequestBodyXPathMatch };
var PostAdminRequestsRemoveByMetadataRequest = /** @class */ (function (_super) {
    __extends(PostAdminRequestsRemoveByMetadataRequest, _super);
    function PostAdminRequestsRemoveByMetadataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostAdminRequestsRemoveByMetadataRequest.prototype, "request", void 0);
    return PostAdminRequestsRemoveByMetadataRequest;
}(SpeakeasyBase));
export { PostAdminRequestsRemoveByMetadataRequest };
var PostAdminRequestsRemoveByMetadataResponse = /** @class */ (function (_super) {
    __extends(PostAdminRequestsRemoveByMetadataResponse, _super);
    function PostAdminRequestsRemoveByMetadataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAdminRequestsRemoveByMetadataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAdminRequestsRemoveByMetadataResponse.prototype, "statusCode", void 0);
    return PostAdminRequestsRemoveByMetadataResponse;
}(SpeakeasyBase));
export { PostAdminRequestsRemoveByMetadataResponse };
