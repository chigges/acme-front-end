function Home() {
	const text_color1 = "text-green-400";
	const text_color2 = "text-green-200";
	return (
		<>
			<div
				id="image-backing"
				className="image-backing"
				style={{
					minHeight: "100vh",
				}}
			>
				<section tabIndex={0} className={"mt-8 bg-gray-950 p-5 rounded-2xl"}>
					<h1 className={`text-bold text-4xl mb-5 ${text_color1}`}>
						Welcome to ACME File Analyzer
					</h1>
					<p>This system is meant to be the front end for ACME package repository.</p>

					<h3 className={`text-3xl m-3 ${text_color2}`}>
						Discover Insights and Enhance Your Projects with Ease
					</h3>

					<p>
						At ACME File Analyzer, we empower developers, project managers, and code
						enthusiasts to gain deeper insights into their codebases and project
						dynamics. Our tool, tailored for efficiency and precision, provides a
						comprehensive analysis of GitHub repositories, offering metrics that matter.
					</p>
				</section>
				<section tabIndex={0} className={"mt-10 bg-gray-950 p-5 rounded-2xl"}>
					<h2 className={`text-3xl m-1 ${text_color1}`}>What We Offer</h2>

					<h3 className={`text-3xl m-3 ${text_color2}`}>Responsive Maintainer Rating</h3>
					<p>
						Understand the engagement level of repository maintainers. Our tool
						evaluates how promptly maintainers respond to pull requests, fostering an
						active and collaborative community.
					</p>

					<h3 className={`text-3xl m-3 ${text_color2}`}>Bus Factor Assessment</h3>
					<p>
						Uncover the risk associated with personnel dependency. Our analysis reveals
						the distribution of knowledge and contribution within your team, helping you
						mitigate the risks of knowledge concentration.
					</p>

					<h3 className={`text-3xl m-3 ${text_color2}`}>Dependencies Audit</h3>
					<p>
						Ensure the stability and security of your project. We scrutinize your
						project’s dependencies, highlighting the fraction that is securely pinned,
						thus safeguarding your code from unexpected changes in external packages.
					</p>

					<h3 className={`text-3xl m-3 ${text_color2}`}>Code Review Metrics</h3>
					<p>
						Elevate the quality of your code. We provide insights into the extent of
						code that undergoes thorough review, promoting best practices in code
						quality and maintainability.
					</p>

					<h3 className={`text-3xl m-3 ${text_color2}`}>File Upload Feature</h3>
					<p>
						Dive deeper with our user-friendly file upload feature. Simply upload a zip
						folder of your project, and our sophisticated tool will transform it into a
						base64 string, seamlessly integrating with our backend for analysis. You'll
						receive real-time feedback and detailed metrics, all tailored to enhance
						your project's health and sustainability.
					</p>
				</section>
				<section tabIndex={0} className={"mt-10 bg-gray-950 p-5 rounded-2xl"}>
					<p className="m-3">
						Join us at ACME, where code analysis is not just a process – it's a pathway
						to project excellence. Explore your repository’s potential and take a step
						towards building more robust, efficient, and collaborative projects.
					</p>

					<p className="m-3">Begin Your Journey Towards Code Excellence Today!</p>
				</section>
				<footer tabIndex={0} className={"mt-4"}>
					&copy; ACME Corporation
				</footer>
			</div>
		</>
	);
}

export default Home;
