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
import * as shared from "../shared";
var EditVodPathParams = /** @class */ (function (_super) {
    __extends(EditVodPathParams, _super);
    function EditVodPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" }),
        __metadata("design:type", Number)
    ], EditVodPathParams.prototype, "ondemandId", void 0);
    return EditVodPathParams;
}(SpeakeasyBase));
export { EditVodPathParams };
var EditVodRequestBodyPreorder = /** @class */ (function (_super) {
    __extends(EditVodRequestBodyPreorder, _super);
    function EditVodRequestBodyPreorder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], EditVodRequestBodyPreorder.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publish_time" }),
        __metadata("design:type", String)
    ], EditVodRequestBodyPreorder.prototype, "publishTime", void 0);
    return EditVodRequestBodyPreorder;
}(SpeakeasyBase));
export { EditVodRequestBodyPreorder };
var EditVodRequestBodyPublish = /** @class */ (function (_super) {
    __extends(EditVodRequestBodyPublish, _super);
    function EditVodRequestBodyPublish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], EditVodRequestBodyPublish.prototype, "active", void 0);
    return EditVodRequestBodyPublish;
}(SpeakeasyBase));
export { EditVodRequestBodyPublish };
var EditVodRequestBody = /** @class */ (function (_super) {
    __extends(EditVodRequestBody, _super);
    function EditVodRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], EditVodRequestBody.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preorder" }),
        __metadata("design:type", EditVodRequestBodyPreorder)
    ], EditVodRequestBody.prototype, "preorder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publish" }),
        __metadata("design:type", EditVodRequestBodyPublish)
    ], EditVodRequestBody.prototype, "publish", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publish_when_ready" }),
        __metadata("design:type", Boolean)
    ], EditVodRequestBody.prototype, "publishWhenReady", void 0);
    return EditVodRequestBody;
}(SpeakeasyBase));
export { EditVodRequestBody };
var EditVodSecurity = /** @class */ (function (_super) {
    __extends(EditVodSecurity, _super);
    function EditVodSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], EditVodSecurity.prototype, "oauth2", void 0);
    return EditVodSecurity;
}(SpeakeasyBase));
export { EditVodSecurity };
var EditVodRequest = /** @class */ (function (_super) {
    __extends(EditVodRequest, _super);
    function EditVodRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EditVodPathParams)
    ], EditVodRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.ondemand.page+json" }),
        __metadata("design:type", EditVodRequestBody)
    ], EditVodRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EditVodSecurity)
    ], EditVodRequest.prototype, "security", void 0);
    return EditVodRequest;
}(SpeakeasyBase));
export { EditVodRequest };
var EditVodResponse = /** @class */ (function (_super) {
    __extends(EditVodResponse, _super);
    function EditVodResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EditVodResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EditVodResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], EditVodResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OnDemandPage)
    ], EditVodResponse.prototype, "onDemandPage", void 0);
    return EditVodResponse;
}(SpeakeasyBase));
export { EditVodResponse };
