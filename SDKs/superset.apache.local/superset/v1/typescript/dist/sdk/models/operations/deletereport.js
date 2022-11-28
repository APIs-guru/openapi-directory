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
var DeleteReportQueryParams = /** @class */ (function (_super) {
    __extends(DeleteReportQueryParams, _super);
    function DeleteReportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", Array)
    ], DeleteReportQueryParams.prototype, "q", void 0);
    return DeleteReportQueryParams;
}(SpeakeasyBase));
export { DeleteReportQueryParams };
var DeleteReportSecurity = /** @class */ (function (_super) {
    __extends(DeleteReportSecurity, _super);
    function DeleteReportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], DeleteReportSecurity.prototype, "jwt", void 0);
    return DeleteReportSecurity;
}(SpeakeasyBase));
export { DeleteReportSecurity };
var DeleteReport200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteReport200ApplicationJson, _super);
    function DeleteReport200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteReport200ApplicationJson.prototype, "message", void 0);
    return DeleteReport200ApplicationJson;
}(SpeakeasyBase));
export { DeleteReport200ApplicationJson };
var DeleteReport401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteReport401ApplicationJson, _super);
    function DeleteReport401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteReport401ApplicationJson.prototype, "message", void 0);
    return DeleteReport401ApplicationJson;
}(SpeakeasyBase));
export { DeleteReport401ApplicationJson };
var DeleteReport403ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteReport403ApplicationJson, _super);
    function DeleteReport403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteReport403ApplicationJson.prototype, "message", void 0);
    return DeleteReport403ApplicationJson;
}(SpeakeasyBase));
export { DeleteReport403ApplicationJson };
var DeleteReport404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteReport404ApplicationJson, _super);
    function DeleteReport404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteReport404ApplicationJson.prototype, "message", void 0);
    return DeleteReport404ApplicationJson;
}(SpeakeasyBase));
export { DeleteReport404ApplicationJson };
var DeleteReport422ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteReport422ApplicationJson, _super);
    function DeleteReport422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteReport422ApplicationJson.prototype, "message", void 0);
    return DeleteReport422ApplicationJson;
}(SpeakeasyBase));
export { DeleteReport422ApplicationJson };
var DeleteReport500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteReport500ApplicationJson, _super);
    function DeleteReport500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteReport500ApplicationJson.prototype, "message", void 0);
    return DeleteReport500ApplicationJson;
}(SpeakeasyBase));
export { DeleteReport500ApplicationJson };
var DeleteReportRequest = /** @class */ (function (_super) {
    __extends(DeleteReportRequest, _super);
    function DeleteReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteReportQueryParams)
    ], DeleteReportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteReportSecurity)
    ], DeleteReportRequest.prototype, "security", void 0);
    return DeleteReportRequest;
}(SpeakeasyBase));
export { DeleteReportRequest };
var DeleteReportResponse = /** @class */ (function (_super) {
    __extends(DeleteReportResponse, _super);
    function DeleteReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteReportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteReport200ApplicationJson)
    ], DeleteReportResponse.prototype, "deleteReport200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteReport401ApplicationJson)
    ], DeleteReportResponse.prototype, "deleteReport401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteReport403ApplicationJson)
    ], DeleteReportResponse.prototype, "deleteReport403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteReport404ApplicationJson)
    ], DeleteReportResponse.prototype, "deleteReport404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteReport422ApplicationJson)
    ], DeleteReportResponse.prototype, "deleteReport422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteReport500ApplicationJson)
    ], DeleteReportResponse.prototype, "deleteReport500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteReportResponse.prototype, "statusCode", void 0);
    return DeleteReportResponse;
}(SpeakeasyBase));
export { DeleteReportResponse };
