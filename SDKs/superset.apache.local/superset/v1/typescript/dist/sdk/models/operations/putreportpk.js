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
var PutReportPkPathParams = /** @class */ (function (_super) {
    __extends(PutReportPkPathParams, _super);
    function PutReportPkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], PutReportPkPathParams.prototype, "pk", void 0);
    return PutReportPkPathParams;
}(SpeakeasyBase));
export { PutReportPkPathParams };
var PutReportPkSecurity = /** @class */ (function (_super) {
    __extends(PutReportPkSecurity, _super);
    function PutReportPkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PutReportPkSecurity.prototype, "jwt", void 0);
    return PutReportPkSecurity;
}(SpeakeasyBase));
export { PutReportPkSecurity };
var PutReportPk200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutReportPk200ApplicationJson, _super);
    function PutReportPk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutReportPk200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.ReportScheduleRestApiPut)
    ], PutReportPk200ApplicationJson.prototype, "result", void 0);
    return PutReportPk200ApplicationJson;
}(SpeakeasyBase));
export { PutReportPk200ApplicationJson };
var PutReportPk400ApplicationJson = /** @class */ (function (_super) {
    __extends(PutReportPk400ApplicationJson, _super);
    function PutReportPk400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutReportPk400ApplicationJson.prototype, "message", void 0);
    return PutReportPk400ApplicationJson;
}(SpeakeasyBase));
export { PutReportPk400ApplicationJson };
var PutReportPk401ApplicationJson = /** @class */ (function (_super) {
    __extends(PutReportPk401ApplicationJson, _super);
    function PutReportPk401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutReportPk401ApplicationJson.prototype, "message", void 0);
    return PutReportPk401ApplicationJson;
}(SpeakeasyBase));
export { PutReportPk401ApplicationJson };
var PutReportPk403ApplicationJson = /** @class */ (function (_super) {
    __extends(PutReportPk403ApplicationJson, _super);
    function PutReportPk403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutReportPk403ApplicationJson.prototype, "message", void 0);
    return PutReportPk403ApplicationJson;
}(SpeakeasyBase));
export { PutReportPk403ApplicationJson };
var PutReportPk404ApplicationJson = /** @class */ (function (_super) {
    __extends(PutReportPk404ApplicationJson, _super);
    function PutReportPk404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutReportPk404ApplicationJson.prototype, "message", void 0);
    return PutReportPk404ApplicationJson;
}(SpeakeasyBase));
export { PutReportPk404ApplicationJson };
var PutReportPk500ApplicationJson = /** @class */ (function (_super) {
    __extends(PutReportPk500ApplicationJson, _super);
    function PutReportPk500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutReportPk500ApplicationJson.prototype, "message", void 0);
    return PutReportPk500ApplicationJson;
}(SpeakeasyBase));
export { PutReportPk500ApplicationJson };
var PutReportPkRequest = /** @class */ (function (_super) {
    __extends(PutReportPkRequest, _super);
    function PutReportPkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutReportPkPathParams)
    ], PutReportPkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReportScheduleRestApiPut)
    ], PutReportPkRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutReportPkSecurity)
    ], PutReportPkRequest.prototype, "security", void 0);
    return PutReportPkRequest;
}(SpeakeasyBase));
export { PutReportPkRequest };
var PutReportPkResponse = /** @class */ (function (_super) {
    __extends(PutReportPkResponse, _super);
    function PutReportPkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutReportPkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutReportPk200ApplicationJson)
    ], PutReportPkResponse.prototype, "putReportPk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutReportPk400ApplicationJson)
    ], PutReportPkResponse.prototype, "putReportPk400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutReportPk401ApplicationJson)
    ], PutReportPkResponse.prototype, "putReportPk401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutReportPk403ApplicationJson)
    ], PutReportPkResponse.prototype, "putReportPk403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutReportPk404ApplicationJson)
    ], PutReportPkResponse.prototype, "putReportPk404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutReportPk500ApplicationJson)
    ], PutReportPkResponse.prototype, "putReportPk500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutReportPkResponse.prototype, "statusCode", void 0);
    return PutReportPkResponse;
}(SpeakeasyBase));
export { PutReportPkResponse };
