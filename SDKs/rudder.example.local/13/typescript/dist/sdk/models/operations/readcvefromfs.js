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
export var ReadCvEfromFs200ApplicationJsonActionEnum;
(function (ReadCvEfromFs200ApplicationJsonActionEnum) {
    ReadCvEfromFs200ApplicationJsonActionEnum["ReadCvEfromFs"] = "readCVEfromFS";
})(ReadCvEfromFs200ApplicationJsonActionEnum || (ReadCvEfromFs200ApplicationJsonActionEnum = {}));
var ReadCvEfromFs200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ReadCvEfromFs200ApplicationJsonData, _super);
    function ReadCvEfromFs200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CVEs" }),
        __metadata("design:type", Number)
    ], ReadCvEfromFs200ApplicationJsonData.prototype, "cvEs", void 0);
    return ReadCvEfromFs200ApplicationJsonData;
}(SpeakeasyBase));
export { ReadCvEfromFs200ApplicationJsonData };
export var ReadCvEfromFs200ApplicationJsonResultEnum;
(function (ReadCvEfromFs200ApplicationJsonResultEnum) {
    ReadCvEfromFs200ApplicationJsonResultEnum["Success"] = "success";
    ReadCvEfromFs200ApplicationJsonResultEnum["Error"] = "error";
})(ReadCvEfromFs200ApplicationJsonResultEnum || (ReadCvEfromFs200ApplicationJsonResultEnum = {}));
var ReadCvEfromFs200ApplicationJson = /** @class */ (function (_super) {
    __extends(ReadCvEfromFs200ApplicationJson, _super);
    function ReadCvEfromFs200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ReadCvEfromFs200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ReadCvEfromFs200ApplicationJsonData)
    ], ReadCvEfromFs200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ReadCvEfromFs200ApplicationJson.prototype, "result", void 0);
    return ReadCvEfromFs200ApplicationJson;
}(SpeakeasyBase));
export { ReadCvEfromFs200ApplicationJson };
var ReadCvEfromFsResponse = /** @class */ (function (_super) {
    __extends(ReadCvEfromFsResponse, _super);
    function ReadCvEfromFsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReadCvEfromFsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReadCvEfromFsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReadCvEfromFs200ApplicationJson)
    ], ReadCvEfromFsResponse.prototype, "readCvEfromFs200ApplicationJsonObject", void 0);
    return ReadCvEfromFsResponse;
}(SpeakeasyBase));
export { ReadCvEfromFsResponse };
