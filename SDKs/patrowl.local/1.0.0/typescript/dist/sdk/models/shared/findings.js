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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var FindingsMetaRisk = /** @class */ (function (_super) {
    __extends(FindingsMetaRisk, _super);
    function FindingsMetaRisk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=cvss_base_score" }),
        __metadata("design:type", Array)
    ], FindingsMetaRisk.prototype, "cvssBaseScore", void 0);
    __decorate([
        Metadata({ data: "json, name=cvss_vector" }),
        __metadata("design:type", Array)
    ], FindingsMetaRisk.prototype, "cvssVector", void 0);
    __decorate([
        Metadata({ data: "json, name=exploit_available" }),
        __metadata("design:type", Array)
    ], FindingsMetaRisk.prototype, "exploitAvailable", void 0);
    __decorate([
        Metadata({ data: "json, name=exploitability_ease" }),
        __metadata("design:type", Array)
    ], FindingsMetaRisk.prototype, "exploitabilityEase", void 0);
    __decorate([
        Metadata({ data: "json, name=patch_publication_date" }),
        __metadata("design:type", Array)
    ], FindingsMetaRisk.prototype, "patchPublicationDate", void 0);
    return FindingsMetaRisk;
}(SpeakeasyBase));
export { FindingsMetaRisk };
var FindingsMetaVulnRefs = /** @class */ (function (_super) {
    __extends(FindingsMetaVulnRefs, _super);
    function FindingsMetaVulnRefs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=bid" }),
        __metadata("design:type", Array)
    ], FindingsMetaVulnRefs.prototype, "bid", void 0);
    __decorate([
        Metadata({ data: "json, name=cpe" }),
        __metadata("design:type", Array)
    ], FindingsMetaVulnRefs.prototype, "cpe", void 0);
    __decorate([
        Metadata({ data: "json, name=cve" }),
        __metadata("design:type", Array)
    ], FindingsMetaVulnRefs.prototype, "cve", void 0);
    __decorate([
        Metadata({ data: "json, name=cwe" }),
        __metadata("design:type", Array)
    ], FindingsMetaVulnRefs.prototype, "cwe", void 0);
    return FindingsMetaVulnRefs;
}(SpeakeasyBase));
export { FindingsMetaVulnRefs };
export var FindingsSeverityEnum;
(function (FindingsSeverityEnum) {
    FindingsSeverityEnum["Info"] = "info";
    FindingsSeverityEnum["Low"] = "low";
    FindingsSeverityEnum["Medium"] = "medium";
    FindingsSeverityEnum["High"] = "high";
})(FindingsSeverityEnum || (FindingsSeverityEnum = {}));
var Findings = /** @class */ (function (_super) {
    __extends(Findings, _super);
    function Findings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=confidence" }),
        __metadata("design:type", String)
    ], Findings.prototype, "confidence", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Findings.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=issue_id" }),
        __metadata("design:type", Number)
    ], Findings.prototype, "issueId", void 0);
    __decorate([
        Metadata({ data: "json, name=meta_links" }),
        __metadata("design:type", Array)
    ], Findings.prototype, "metaLinks", void 0);
    __decorate([
        Metadata({ data: "json, name=meta_risk" }),
        __metadata("design:type", FindingsMetaRisk)
    ], Findings.prototype, "metaRisk", void 0);
    __decorate([
        Metadata({ data: "json, name=meta_tags" }),
        __metadata("design:type", Array)
    ], Findings.prototype, "metaTags", void 0);
    __decorate([
        Metadata({ data: "json, name=meta_vuln_refs" }),
        __metadata("design:type", FindingsMetaVulnRefs)
    ], Findings.prototype, "metaVulnRefs", void 0);
    __decorate([
        Metadata({ data: "json, name=raw" }),
        __metadata("design:type", String)
    ], Findings.prototype, "raw", void 0);
    __decorate([
        Metadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], Findings.prototype, "severity", void 0);
    __decorate([
        Metadata({ data: "json, name=solution" }),
        __metadata("design:type", String)
    ], Findings.prototype, "solution", void 0);
    __decorate([
        Metadata({ data: "json, name=target_addrs" }),
        __metadata("design:type", Array)
    ], Findings.prototype, "targetAddrs", void 0);
    __decorate([
        Metadata({ data: "json, name=target_proto" }),
        __metadata("design:type", Array)
    ], Findings.prototype, "targetProto", void 0);
    __decorate([
        Metadata({ data: "json, name=timestamp" }),
        __metadata("design:type", Date)
    ], Findings.prototype, "timestamp", void 0);
    __decorate([
        Metadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Findings.prototype, "title", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Findings.prototype, "type", void 0);
    return Findings;
}(SpeakeasyBase));
export { Findings };
