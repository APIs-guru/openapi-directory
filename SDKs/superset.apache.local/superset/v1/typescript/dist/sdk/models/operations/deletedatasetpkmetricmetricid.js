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
var DeleteDatasetPkMetricMetricIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteDatasetPkMetricMetricIdPathParams, _super);
    function DeleteDatasetPkMetricMetricIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=metric_id" }),
        __metadata("design:type", Number)
    ], DeleteDatasetPkMetricMetricIdPathParams.prototype, "metricId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], DeleteDatasetPkMetricMetricIdPathParams.prototype, "pk", void 0);
    return DeleteDatasetPkMetricMetricIdPathParams;
}(SpeakeasyBase));
export { DeleteDatasetPkMetricMetricIdPathParams };
var DeleteDatasetPkMetricMetricIdSecurity = /** @class */ (function (_super) {
    __extends(DeleteDatasetPkMetricMetricIdSecurity, _super);
    function DeleteDatasetPkMetricMetricIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], DeleteDatasetPkMetricMetricIdSecurity.prototype, "jwt", void 0);
    return DeleteDatasetPkMetricMetricIdSecurity;
}(SpeakeasyBase));
export { DeleteDatasetPkMetricMetricIdSecurity };
var DeleteDatasetPkMetricMetricId200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDatasetPkMetricMetricId200ApplicationJson, _super);
    function DeleteDatasetPkMetricMetricId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDatasetPkMetricMetricId200ApplicationJson.prototype, "message", void 0);
    return DeleteDatasetPkMetricMetricId200ApplicationJson;
}(SpeakeasyBase));
export { DeleteDatasetPkMetricMetricId200ApplicationJson };
var DeleteDatasetPkMetricMetricId401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDatasetPkMetricMetricId401ApplicationJson, _super);
    function DeleteDatasetPkMetricMetricId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDatasetPkMetricMetricId401ApplicationJson.prototype, "message", void 0);
    return DeleteDatasetPkMetricMetricId401ApplicationJson;
}(SpeakeasyBase));
export { DeleteDatasetPkMetricMetricId401ApplicationJson };
var DeleteDatasetPkMetricMetricId403ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDatasetPkMetricMetricId403ApplicationJson, _super);
    function DeleteDatasetPkMetricMetricId403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDatasetPkMetricMetricId403ApplicationJson.prototype, "message", void 0);
    return DeleteDatasetPkMetricMetricId403ApplicationJson;
}(SpeakeasyBase));
export { DeleteDatasetPkMetricMetricId403ApplicationJson };
var DeleteDatasetPkMetricMetricId404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDatasetPkMetricMetricId404ApplicationJson, _super);
    function DeleteDatasetPkMetricMetricId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDatasetPkMetricMetricId404ApplicationJson.prototype, "message", void 0);
    return DeleteDatasetPkMetricMetricId404ApplicationJson;
}(SpeakeasyBase));
export { DeleteDatasetPkMetricMetricId404ApplicationJson };
var DeleteDatasetPkMetricMetricId422ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDatasetPkMetricMetricId422ApplicationJson, _super);
    function DeleteDatasetPkMetricMetricId422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDatasetPkMetricMetricId422ApplicationJson.prototype, "message", void 0);
    return DeleteDatasetPkMetricMetricId422ApplicationJson;
}(SpeakeasyBase));
export { DeleteDatasetPkMetricMetricId422ApplicationJson };
var DeleteDatasetPkMetricMetricId500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDatasetPkMetricMetricId500ApplicationJson, _super);
    function DeleteDatasetPkMetricMetricId500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDatasetPkMetricMetricId500ApplicationJson.prototype, "message", void 0);
    return DeleteDatasetPkMetricMetricId500ApplicationJson;
}(SpeakeasyBase));
export { DeleteDatasetPkMetricMetricId500ApplicationJson };
var DeleteDatasetPkMetricMetricIdRequest = /** @class */ (function (_super) {
    __extends(DeleteDatasetPkMetricMetricIdRequest, _super);
    function DeleteDatasetPkMetricMetricIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetPkMetricMetricIdPathParams)
    ], DeleteDatasetPkMetricMetricIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetPkMetricMetricIdSecurity)
    ], DeleteDatasetPkMetricMetricIdRequest.prototype, "security", void 0);
    return DeleteDatasetPkMetricMetricIdRequest;
}(SpeakeasyBase));
export { DeleteDatasetPkMetricMetricIdRequest };
var DeleteDatasetPkMetricMetricIdResponse = /** @class */ (function (_super) {
    __extends(DeleteDatasetPkMetricMetricIdResponse, _super);
    function DeleteDatasetPkMetricMetricIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteDatasetPkMetricMetricIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetPkMetricMetricId200ApplicationJson)
    ], DeleteDatasetPkMetricMetricIdResponse.prototype, "deleteDatasetPkMetricMetricId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetPkMetricMetricId401ApplicationJson)
    ], DeleteDatasetPkMetricMetricIdResponse.prototype, "deleteDatasetPkMetricMetricId401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetPkMetricMetricId403ApplicationJson)
    ], DeleteDatasetPkMetricMetricIdResponse.prototype, "deleteDatasetPkMetricMetricId403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetPkMetricMetricId404ApplicationJson)
    ], DeleteDatasetPkMetricMetricIdResponse.prototype, "deleteDatasetPkMetricMetricId404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetPkMetricMetricId422ApplicationJson)
    ], DeleteDatasetPkMetricMetricIdResponse.prototype, "deleteDatasetPkMetricMetricId422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetPkMetricMetricId500ApplicationJson)
    ], DeleteDatasetPkMetricMetricIdResponse.prototype, "deleteDatasetPkMetricMetricId500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteDatasetPkMetricMetricIdResponse.prototype, "statusCode", void 0);
    return DeleteDatasetPkMetricMetricIdResponse;
}(SpeakeasyBase));
export { DeleteDatasetPkMetricMetricIdResponse };
