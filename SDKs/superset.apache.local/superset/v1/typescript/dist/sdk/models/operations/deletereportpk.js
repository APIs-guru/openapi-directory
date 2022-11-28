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
var DeleteReportPkPathParams = /** @class */ (function (_super) {
    __extends(DeleteReportPkPathParams, _super);
    function DeleteReportPkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], DeleteReportPkPathParams.prototype, "pk", void 0);
    return DeleteReportPkPathParams;
}(SpeakeasyBase));
export { DeleteReportPkPathParams };
var DeleteReportPkSecurity = /** @class */ (function (_super) {
    __extends(DeleteReportPkSecurity, _super);
    function DeleteReportPkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], DeleteReportPkSecurity.prototype, "jwt", void 0);
    return DeleteReportPkSecurity;
}(SpeakeasyBase));
export { DeleteReportPkSecurity };
var DeleteReportPk200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteReportPk200ApplicationJson, _super);
    function DeleteReportPk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteReportPk200ApplicationJson.prototype, "message", void 0);
    return DeleteReportPk200ApplicationJson;
}(SpeakeasyBase));
export { DeleteReportPk200ApplicationJson };
var DeleteReportPk403ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteReportPk403ApplicationJson, _super);
    function DeleteReportPk403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteReportPk403ApplicationJson.prototype, "message", void 0);
    return DeleteReportPk403ApplicationJson;
}(SpeakeasyBase));
export { DeleteReportPk403ApplicationJson };
var DeleteReportPk404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteReportPk404ApplicationJson, _super);
    function DeleteReportPk404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteReportPk404ApplicationJson.prototype, "message", void 0);
    return DeleteReportPk404ApplicationJson;
}(SpeakeasyBase));
export { DeleteReportPk404ApplicationJson };
var DeleteReportPk422ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteReportPk422ApplicationJson, _super);
    function DeleteReportPk422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteReportPk422ApplicationJson.prototype, "message", void 0);
    return DeleteReportPk422ApplicationJson;
}(SpeakeasyBase));
export { DeleteReportPk422ApplicationJson };
var DeleteReportPk500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteReportPk500ApplicationJson, _super);
    function DeleteReportPk500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteReportPk500ApplicationJson.prototype, "message", void 0);
    return DeleteReportPk500ApplicationJson;
}(SpeakeasyBase));
export { DeleteReportPk500ApplicationJson };
var DeleteReportPkRequest = /** @class */ (function (_super) {
    __extends(DeleteReportPkRequest, _super);
    function DeleteReportPkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteReportPkPathParams)
    ], DeleteReportPkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteReportPkSecurity)
    ], DeleteReportPkRequest.prototype, "security", void 0);
    return DeleteReportPkRequest;
}(SpeakeasyBase));
export { DeleteReportPkRequest };
var DeleteReportPkResponse = /** @class */ (function (_super) {
    __extends(DeleteReportPkResponse, _super);
    function DeleteReportPkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteReportPkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteReportPk200ApplicationJson)
    ], DeleteReportPkResponse.prototype, "deleteReportPk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteReportPk403ApplicationJson)
    ], DeleteReportPkResponse.prototype, "deleteReportPk403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteReportPk404ApplicationJson)
    ], DeleteReportPkResponse.prototype, "deleteReportPk404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteReportPk422ApplicationJson)
    ], DeleteReportPkResponse.prototype, "deleteReportPk422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteReportPk500ApplicationJson)
    ], DeleteReportPkResponse.prototype, "deleteReportPk500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteReportPkResponse.prototype, "statusCode", void 0);
    return DeleteReportPkResponse;
}(SpeakeasyBase));
export { DeleteReportPkResponse };
