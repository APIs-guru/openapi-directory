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
var PutDashboardPkPathParams = /** @class */ (function (_super) {
    __extends(PutDashboardPkPathParams, _super);
    function PutDashboardPkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], PutDashboardPkPathParams.prototype, "pk", void 0);
    return PutDashboardPkPathParams;
}(SpeakeasyBase));
export { PutDashboardPkPathParams };
var PutDashboardPkSecurity = /** @class */ (function (_super) {
    __extends(PutDashboardPkSecurity, _super);
    function PutDashboardPkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PutDashboardPkSecurity.prototype, "jwt", void 0);
    return PutDashboardPkSecurity;
}(SpeakeasyBase));
export { PutDashboardPkSecurity };
var PutDashboardPk200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDashboardPk200ApplicationJson, _super);
    function PutDashboardPk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutDashboardPk200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.DashboardRestApiPut)
    ], PutDashboardPk200ApplicationJson.prototype, "result", void 0);
    return PutDashboardPk200ApplicationJson;
}(SpeakeasyBase));
export { PutDashboardPk200ApplicationJson };
var PutDashboardPk400ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDashboardPk400ApplicationJson, _super);
    function PutDashboardPk400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutDashboardPk400ApplicationJson.prototype, "message", void 0);
    return PutDashboardPk400ApplicationJson;
}(SpeakeasyBase));
export { PutDashboardPk400ApplicationJson };
var PutDashboardPk401ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDashboardPk401ApplicationJson, _super);
    function PutDashboardPk401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutDashboardPk401ApplicationJson.prototype, "message", void 0);
    return PutDashboardPk401ApplicationJson;
}(SpeakeasyBase));
export { PutDashboardPk401ApplicationJson };
var PutDashboardPk403ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDashboardPk403ApplicationJson, _super);
    function PutDashboardPk403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutDashboardPk403ApplicationJson.prototype, "message", void 0);
    return PutDashboardPk403ApplicationJson;
}(SpeakeasyBase));
export { PutDashboardPk403ApplicationJson };
var PutDashboardPk404ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDashboardPk404ApplicationJson, _super);
    function PutDashboardPk404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutDashboardPk404ApplicationJson.prototype, "message", void 0);
    return PutDashboardPk404ApplicationJson;
}(SpeakeasyBase));
export { PutDashboardPk404ApplicationJson };
var PutDashboardPk422ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDashboardPk422ApplicationJson, _super);
    function PutDashboardPk422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutDashboardPk422ApplicationJson.prototype, "message", void 0);
    return PutDashboardPk422ApplicationJson;
}(SpeakeasyBase));
export { PutDashboardPk422ApplicationJson };
var PutDashboardPk500ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDashboardPk500ApplicationJson, _super);
    function PutDashboardPk500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutDashboardPk500ApplicationJson.prototype, "message", void 0);
    return PutDashboardPk500ApplicationJson;
}(SpeakeasyBase));
export { PutDashboardPk500ApplicationJson };
var PutDashboardPkRequest = /** @class */ (function (_super) {
    __extends(PutDashboardPkRequest, _super);
    function PutDashboardPkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDashboardPkPathParams)
    ], PutDashboardPkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DashboardRestApiPut)
    ], PutDashboardPkRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDashboardPkSecurity)
    ], PutDashboardPkRequest.prototype, "security", void 0);
    return PutDashboardPkRequest;
}(SpeakeasyBase));
export { PutDashboardPkRequest };
var PutDashboardPkResponse = /** @class */ (function (_super) {
    __extends(PutDashboardPkResponse, _super);
    function PutDashboardPkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutDashboardPkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDashboardPk200ApplicationJson)
    ], PutDashboardPkResponse.prototype, "putDashboardPk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDashboardPk400ApplicationJson)
    ], PutDashboardPkResponse.prototype, "putDashboardPk400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDashboardPk401ApplicationJson)
    ], PutDashboardPkResponse.prototype, "putDashboardPk401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDashboardPk403ApplicationJson)
    ], PutDashboardPkResponse.prototype, "putDashboardPk403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDashboardPk404ApplicationJson)
    ], PutDashboardPkResponse.prototype, "putDashboardPk404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDashboardPk422ApplicationJson)
    ], PutDashboardPkResponse.prototype, "putDashboardPk422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDashboardPk500ApplicationJson)
    ], PutDashboardPkResponse.prototype, "putDashboardPk500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutDashboardPkResponse.prototype, "statusCode", void 0);
    return PutDashboardPkResponse;
}(SpeakeasyBase));
export { PutDashboardPkResponse };
