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
var PutCssTemplatePkPathParams = /** @class */ (function (_super) {
    __extends(PutCssTemplatePkPathParams, _super);
    function PutCssTemplatePkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], PutCssTemplatePkPathParams.prototype, "pk", void 0);
    return PutCssTemplatePkPathParams;
}(SpeakeasyBase));
export { PutCssTemplatePkPathParams };
var PutCssTemplatePkSecurity = /** @class */ (function (_super) {
    __extends(PutCssTemplatePkSecurity, _super);
    function PutCssTemplatePkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PutCssTemplatePkSecurity.prototype, "jwt", void 0);
    return PutCssTemplatePkSecurity;
}(SpeakeasyBase));
export { PutCssTemplatePkSecurity };
var PutCssTemplatePk200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutCssTemplatePk200ApplicationJson, _super);
    function PutCssTemplatePk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.CssTemplateRestApiPut)
    ], PutCssTemplatePk200ApplicationJson.prototype, "result", void 0);
    return PutCssTemplatePk200ApplicationJson;
}(SpeakeasyBase));
export { PutCssTemplatePk200ApplicationJson };
var PutCssTemplatePk400ApplicationJson = /** @class */ (function (_super) {
    __extends(PutCssTemplatePk400ApplicationJson, _super);
    function PutCssTemplatePk400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutCssTemplatePk400ApplicationJson.prototype, "message", void 0);
    return PutCssTemplatePk400ApplicationJson;
}(SpeakeasyBase));
export { PutCssTemplatePk400ApplicationJson };
var PutCssTemplatePk401ApplicationJson = /** @class */ (function (_super) {
    __extends(PutCssTemplatePk401ApplicationJson, _super);
    function PutCssTemplatePk401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutCssTemplatePk401ApplicationJson.prototype, "message", void 0);
    return PutCssTemplatePk401ApplicationJson;
}(SpeakeasyBase));
export { PutCssTemplatePk401ApplicationJson };
var PutCssTemplatePk404ApplicationJson = /** @class */ (function (_super) {
    __extends(PutCssTemplatePk404ApplicationJson, _super);
    function PutCssTemplatePk404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutCssTemplatePk404ApplicationJson.prototype, "message", void 0);
    return PutCssTemplatePk404ApplicationJson;
}(SpeakeasyBase));
export { PutCssTemplatePk404ApplicationJson };
var PutCssTemplatePk422ApplicationJson = /** @class */ (function (_super) {
    __extends(PutCssTemplatePk422ApplicationJson, _super);
    function PutCssTemplatePk422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutCssTemplatePk422ApplicationJson.prototype, "message", void 0);
    return PutCssTemplatePk422ApplicationJson;
}(SpeakeasyBase));
export { PutCssTemplatePk422ApplicationJson };
var PutCssTemplatePk500ApplicationJson = /** @class */ (function (_super) {
    __extends(PutCssTemplatePk500ApplicationJson, _super);
    function PutCssTemplatePk500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutCssTemplatePk500ApplicationJson.prototype, "message", void 0);
    return PutCssTemplatePk500ApplicationJson;
}(SpeakeasyBase));
export { PutCssTemplatePk500ApplicationJson };
var PutCssTemplatePkRequest = /** @class */ (function (_super) {
    __extends(PutCssTemplatePkRequest, _super);
    function PutCssTemplatePkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutCssTemplatePkPathParams)
    ], PutCssTemplatePkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CssTemplateRestApiPut)
    ], PutCssTemplatePkRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutCssTemplatePkSecurity)
    ], PutCssTemplatePkRequest.prototype, "security", void 0);
    return PutCssTemplatePkRequest;
}(SpeakeasyBase));
export { PutCssTemplatePkRequest };
var PutCssTemplatePkResponse = /** @class */ (function (_super) {
    __extends(PutCssTemplatePkResponse, _super);
    function PutCssTemplatePkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutCssTemplatePkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutCssTemplatePk200ApplicationJson)
    ], PutCssTemplatePkResponse.prototype, "putCssTemplatePk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutCssTemplatePk400ApplicationJson)
    ], PutCssTemplatePkResponse.prototype, "putCssTemplatePk400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutCssTemplatePk401ApplicationJson)
    ], PutCssTemplatePkResponse.prototype, "putCssTemplatePk401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutCssTemplatePk404ApplicationJson)
    ], PutCssTemplatePkResponse.prototype, "putCssTemplatePk404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutCssTemplatePk422ApplicationJson)
    ], PutCssTemplatePkResponse.prototype, "putCssTemplatePk422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutCssTemplatePk500ApplicationJson)
    ], PutCssTemplatePkResponse.prototype, "putCssTemplatePk500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutCssTemplatePkResponse.prototype, "statusCode", void 0);
    return PutCssTemplatePkResponse;
}(SpeakeasyBase));
export { PutCssTemplatePkResponse };
