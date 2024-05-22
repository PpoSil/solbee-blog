import Link from "next/link";

const ProjectMain = () => {
  return (
    <div>
      여기는 프로젝트 소개지롱
      <Link href="/projects/have-it">해빗</Link>
      <Link href="/projects/heul-git">흘깃</Link>
      <Link href="/projects/sstude-house">싸튀</Link>
    </div>
  );
};

export default ProjectMain;
