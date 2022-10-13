package shared

type MemberBiography struct {
	CommitteeMemberships []BiographyItem `json:"committeeMemberships"`
	ElectionsContested   []BiographyItem `json:"electionsContested"`
	GovernmentPosts      []BiographyItem `json:"governmentPosts"`
	HouseMemberships     []BiographyItem `json:"houseMemberships"`
	OppositionPosts      []BiographyItem `json:"oppositionPosts"`
	OtherPosts           []BiographyItem `json:"otherPosts"`
	PartyAffiliations    []BiographyItem `json:"partyAffiliations"`
	Representations      []BiographyItem `json:"representations"`
}
