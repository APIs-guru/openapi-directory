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
var UpdateDocPathParams = /** @class */ (function (_super) {
    __extends(UpdateDocPathParams, _super);
    function UpdateDocPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" }),
        __metadata("design:type", String)
    ], UpdateDocPathParams.prototype, "slug", void 0);
    return UpdateDocPathParams;
}(SpeakeasyBase));
export { UpdateDocPathParams };
var UpdateDocHeaders = /** @class */ (function (_super) {
    __extends(UpdateDocHeaders, _super);
    function UpdateDocHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-readme-version" }),
        __metadata("design:type", String)
    ], UpdateDocHeaders.prototype, "xReadmeVersion", void 0);
    return UpdateDocHeaders;
}(SpeakeasyBase));
export { UpdateDocHeaders };
var UpdateDocSecurity = /** @class */ (function (_super) {
    __extends(UpdateDocSecurity, _super);
    function UpdateDocSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], UpdateDocSecurity.prototype, "apiKey", void 0);
    return UpdateDocSecurity;
}(SpeakeasyBase));
export { UpdateDocSecurity };
var UpdateDocRequest = /** @class */ (function (_super) {
    __extends(UpdateDocRequest, _super);
    function UpdateDocRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDocPathParams)
    ], UpdateDocRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDocHeaders)
    ], UpdateDocRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Doc)
    ], UpdateDocRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDocSecurity)
    ], UpdateDocRequest.prototype, "security", void 0);
    return UpdateDocRequest;
}(SpeakeasyBase));
export { UpdateDocRequest };
var UpdateDocResponse = /** @class */ (function (_super) {
    __extends(UpdateDocResponse, _super);
    function UpdateDocResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDocResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDocResponse.prototype, "statusCode", void 0);
    return UpdateDocResponse;
}(SpeakeasyBase));
export { UpdateDocResponse };
