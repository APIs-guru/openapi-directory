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
var PutDatasetPkPathParams = /** @class */ (function (_super) {
    __extends(PutDatasetPkPathParams, _super);
    function PutDatasetPkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], PutDatasetPkPathParams.prototype, "pk", void 0);
    return PutDatasetPkPathParams;
}(SpeakeasyBase));
export { PutDatasetPkPathParams };
var PutDatasetPkQueryParams = /** @class */ (function (_super) {
    __extends(PutDatasetPkQueryParams, _super);
    function PutDatasetPkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=override_columns" }),
        __metadata("design:type", Boolean)
    ], PutDatasetPkQueryParams.prototype, "overrideColumns", void 0);
    return PutDatasetPkQueryParams;
}(SpeakeasyBase));
export { PutDatasetPkQueryParams };
var PutDatasetPkSecurity = /** @class */ (function (_super) {
    __extends(PutDatasetPkSecurity, _super);
    function PutDatasetPkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PutDatasetPkSecurity.prototype, "jwt", void 0);
    return PutDatasetPkSecurity;
}(SpeakeasyBase));
export { PutDatasetPkSecurity };
var PutDatasetPk200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDatasetPk200ApplicationJson, _super);
    function PutDatasetPk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutDatasetPk200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.DatasetRestApiPut)
    ], PutDatasetPk200ApplicationJson.prototype, "result", void 0);
    return PutDatasetPk200ApplicationJson;
}(SpeakeasyBase));
export { PutDatasetPk200ApplicationJson };
var PutDatasetPk400ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDatasetPk400ApplicationJson, _super);
    function PutDatasetPk400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutDatasetPk400ApplicationJson.prototype, "message", void 0);
    return PutDatasetPk400ApplicationJson;
}(SpeakeasyBase));
export { PutDatasetPk400ApplicationJson };
var PutDatasetPk401ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDatasetPk401ApplicationJson, _super);
    function PutDatasetPk401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutDatasetPk401ApplicationJson.prototype, "message", void 0);
    return PutDatasetPk401ApplicationJson;
}(SpeakeasyBase));
export { PutDatasetPk401ApplicationJson };
var PutDatasetPk403ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDatasetPk403ApplicationJson, _super);
    function PutDatasetPk403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutDatasetPk403ApplicationJson.prototype, "message", void 0);
    return PutDatasetPk403ApplicationJson;
}(SpeakeasyBase));
export { PutDatasetPk403ApplicationJson };
var PutDatasetPk404ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDatasetPk404ApplicationJson, _super);
    function PutDatasetPk404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutDatasetPk404ApplicationJson.prototype, "message", void 0);
    return PutDatasetPk404ApplicationJson;
}(SpeakeasyBase));
export { PutDatasetPk404ApplicationJson };
var PutDatasetPk422ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDatasetPk422ApplicationJson, _super);
    function PutDatasetPk422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutDatasetPk422ApplicationJson.prototype, "message", void 0);
    return PutDatasetPk422ApplicationJson;
}(SpeakeasyBase));
export { PutDatasetPk422ApplicationJson };
var PutDatasetPk500ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDatasetPk500ApplicationJson, _super);
    function PutDatasetPk500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutDatasetPk500ApplicationJson.prototype, "message", void 0);
    return PutDatasetPk500ApplicationJson;
}(SpeakeasyBase));
export { PutDatasetPk500ApplicationJson };
var PutDatasetPkRequest = /** @class */ (function (_super) {
    __extends(PutDatasetPkRequest, _super);
    function PutDatasetPkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatasetPkPathParams)
    ], PutDatasetPkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatasetPkQueryParams)
    ], PutDatasetPkRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DatasetRestApiPut)
    ], PutDatasetPkRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatasetPkSecurity)
    ], PutDatasetPkRequest.prototype, "security", void 0);
    return PutDatasetPkRequest;
}(SpeakeasyBase));
export { PutDatasetPkRequest };
var PutDatasetPkResponse = /** @class */ (function (_super) {
    __extends(PutDatasetPkResponse, _super);
    function PutDatasetPkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutDatasetPkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatasetPk200ApplicationJson)
    ], PutDatasetPkResponse.prototype, "putDatasetPk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatasetPk400ApplicationJson)
    ], PutDatasetPkResponse.prototype, "putDatasetPk400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatasetPk401ApplicationJson)
    ], PutDatasetPkResponse.prototype, "putDatasetPk401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatasetPk403ApplicationJson)
    ], PutDatasetPkResponse.prototype, "putDatasetPk403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatasetPk404ApplicationJson)
    ], PutDatasetPkResponse.prototype, "putDatasetPk404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatasetPk422ApplicationJson)
    ], PutDatasetPkResponse.prototype, "putDatasetPk422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatasetPk500ApplicationJson)
    ], PutDatasetPkResponse.prototype, "putDatasetPk500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutDatasetPkResponse.prototype, "statusCode", void 0);
    return PutDatasetPkResponse;
}(SpeakeasyBase));
export { PutDatasetPkResponse };
